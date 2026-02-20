-- ============================================================
-- APEX BUILDERS PORTAL — INITIAL SCHEMA
-- Run this in: Supabase Dashboard → SQL Editor → Run
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- ENUMS
-- ============================================================
CREATE TYPE user_role AS ENUM ('admin', 'client', 'tech');
CREATE TYPE project_status AS ENUM ('new', 'scheduled', 'in_progress', 'completed', 'invoiced');
CREATE TYPE project_category AS ENUM ('hvac', 'plumbing', 'roofing', 'electrical', 'renovation', 'construction', 'other');
CREATE TYPE project_priority AS ENUM ('low', 'normal', 'high', 'urgent');
CREATE TYPE invoice_status AS ENUM ('pending', 'paid', 'overdue');
CREATE TYPE asset_status AS ENUM ('available', 'checked_out', 'maintenance');
CREATE TYPE asset_action AS ENUM ('check_in', 'check_out');
CREATE TYPE log_type AS ENUM ('note', 'photo', 'video', 'signature', 'status_update');

-- ============================================================
-- PROFILES (extends Supabase auth.users)
-- ============================================================
CREATE TABLE profiles (
  id           UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role         user_role NOT NULL DEFAULT 'client',
  full_name    TEXT NOT NULL,
  email        TEXT NOT NULL UNIQUE,
  phone        TEXT,
  address      TEXT,
  avatar_url   TEXT,
  skills       TEXT[] DEFAULT '{}',
  is_active    BOOLEAN NOT NULL DEFAULT true,
  on_leave     BOOLEAN NOT NULL DEFAULT false,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PROJECTS
-- ============================================================
CREATE TABLE projects (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title               TEXT NOT NULL,
  description         TEXT,
  address             TEXT,
  status              project_status NOT NULL DEFAULT 'new',
  category            project_category NOT NULL DEFAULT 'other',
  priority            project_priority NOT NULL DEFAULT 'normal',
  client_id           UUID REFERENCES profiles(id) ON DELETE SET NULL,
  assigned_tech_id    UUID REFERENCES profiles(id) ON DELETE SET NULL,
  budget              NUMERIC(12,2),
  amount_spent        NUMERIC(12,2) DEFAULT 0,
  start_date          DATE,
  end_date            DATE,
  estimated_completion DATE,
  phases              JSONB DEFAULT '[]',
  thumbnail_url       TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PROJECT LOGS (technician field updates)
-- ============================================================
CREATE TABLE project_logs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id  UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  author_id   UUID REFERENCES profiles(id) ON DELETE SET NULL,
  description TEXT NOT NULL,
  log_type    log_type NOT NULL DEFAULT 'note',
  media_urls  TEXT[] DEFAULT '{}',
  progress_pct INTEGER CHECK (progress_pct BETWEEN 0 AND 100),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- INVOICES
-- ============================================================
CREATE TABLE invoices (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id  UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  client_id   UUID REFERENCES profiles(id) ON DELETE SET NULL,
  number      TEXT NOT NULL UNIQUE,
  description TEXT,
  total       NUMERIC(12,2) NOT NULL,
  balance     NUMERIC(12,2) NOT NULL,
  discount    NUMERIC(12,2) DEFAULT 0,
  due_date    DATE,
  status      invoice_status NOT NULL DEFAULT 'pending',
  pdf_url     TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ASSETS
-- ============================================================
CREATE TABLE assets (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name             TEXT NOT NULL,
  category         TEXT,
  status           asset_status NOT NULL DEFAULT 'available',
  current_holder_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  condition        TEXT,
  notes            TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ASSET LOGS
-- ============================================================
CREATE TABLE asset_logs (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_id   UUID NOT NULL REFERENCES assets(id) ON DELETE CASCADE,
  user_id    UUID REFERENCES profiles(id) ON DELETE SET NULL,
  action     asset_action NOT NULL,
  notes      TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- LEADS (landing page form submissions)
-- ============================================================
CREATE TABLE leads (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT,
  service_type TEXT,
  notes        TEXT,
  status       TEXT DEFAULT 'new',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- AUTO-CREATE PROFILE ON SIGNUP (hardened — never blocks user creation)
-- ============================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  v_role      user_role := 'client';
  v_full_name TEXT;
BEGIN
  -- Safely cast role from metadata (defaults to 'client' on any error)
  BEGIN
    IF NEW.raw_user_meta_data IS NOT NULL
       AND NEW.raw_user_meta_data->>'role' IS NOT NULL
    THEN
      v_role := (NEW.raw_user_meta_data->>'role')::user_role;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    v_role := 'client';
  END;

  v_full_name := COALESCE(
    CASE WHEN NEW.raw_user_meta_data IS NOT NULL
         THEN NEW.raw_user_meta_data->>'full_name'
         ELSE NULL END,
    split_part(COALESCE(NEW.email, 'user'), '@', 1)
  );

  INSERT INTO profiles (id, email, full_name, role)
  VALUES (NEW.id, NEW.email, v_full_name, v_role)
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log the error but never block user creation
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects     ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices     ENABLE ROW LEVEL SECURITY;
ALTER TABLE assets       ENABLE ROW LEVEL SECURITY;
ALTER TABLE asset_logs   ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads        ENABLE ROW LEVEL SECURITY;

-- Helper: is current user an admin?
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Helper: is current user a tech?
CREATE OR REPLACE FUNCTION is_tech()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'tech'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- PROFILES policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id OR is_admin());

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can manage all profiles" ON profiles
  FOR ALL USING (is_admin());

-- PROJECTS policies
CREATE POLICY "Clients see own projects" ON projects
  FOR SELECT USING (client_id = auth.uid() OR assigned_tech_id = auth.uid() OR is_admin());

CREATE POLICY "Admins manage all projects" ON projects
  FOR ALL USING (is_admin());

CREATE POLICY "Techs can update assigned projects" ON projects
  FOR UPDATE USING (assigned_tech_id = auth.uid());

-- PROJECT_LOGS policies
CREATE POLICY "View logs for accessible projects" ON project_logs
  FOR SELECT USING (
    is_admin()
    OR author_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM projects p
      WHERE p.id = project_logs.project_id
        AND (p.client_id = auth.uid() OR p.assigned_tech_id = auth.uid())
    )
  );

CREATE POLICY "Techs and admins can insert logs" ON project_logs
  FOR INSERT WITH CHECK (is_admin() OR is_tech());

-- INVOICES policies
CREATE POLICY "Clients see own invoices" ON invoices
  FOR SELECT USING (client_id = auth.uid() OR is_admin());

CREATE POLICY "Admins manage invoices" ON invoices
  FOR ALL USING (is_admin());

-- ASSETS policies
CREATE POLICY "All authenticated users can view assets" ON assets
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins manage assets" ON assets
  FOR ALL USING (is_admin());

-- ASSET_LOGS policies
CREATE POLICY "Users see own asset logs" ON asset_logs
  FOR SELECT USING (user_id = auth.uid() OR is_admin());

CREATE POLICY "Authenticated users can log asset actions" ON asset_logs
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- LEADS policies (admin only)
CREATE POLICY "Only admins can see leads" ON leads
  FOR ALL USING (is_admin());
