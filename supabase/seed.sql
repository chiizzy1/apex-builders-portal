-- ============================================================
-- APEX BUILDERS PORTAL — DEMO SEED DATA
-- Run AFTER 001_initial_schema.sql
--
-- IMPORTANT: You must create the 3 users via Supabase Auth
-- FIRST, then run this seed. The profile UUIDs below must
-- match the actual auth.users IDs created.
--
-- Step 1: Go to Authentication → Users → Add User (3x)
--   Admin:  james@apexbuilders.com  / demo1234
--   Client: sarah@example.com        / demo1234
--   Tech:   mike@apexbuilders.com    / demo1234
--
-- Step 2: Copy their UUIDs from the Auth panel and replace
--   the placeholder UUIDs below.
--
-- Step 3: Run this file in SQL Editor.
-- ============================================================

-- PLACEHOLDER UUIDs — replace with real auth UUIDs
DO $$
DECLARE
  admin_id  UUID := '27d56355-0257-472a-8d85-92796c6cbc1';
  client_id UUID := '02bc2c39-263b-49c2-96fd-e593ad16fe42';
  tech_id   UUID := 'c26995ea-07f9-4f14-8619-d25f352a3165';
  project1_id UUID := uuid_generate_v4();
  project2_id UUID := uuid_generate_v4();
  project3_id UUID := uuid_generate_v4();
  project4_id UUID := uuid_generate_v4();
BEGIN

-- ============================================================
-- PROFILES
-- ============================================================
INSERT INTO profiles (id, role, full_name, email, phone, avatar_url, skills, is_active)
VALUES
  (admin_id,  'admin',  'James Carter',    'james@apexbuilders.com', '+1 (555) 100-0001', NULL, '{}', true),
  (client_id, 'client', 'Sarah Jenkins',   'sarah@example.com',       '+1 (555) 200-0002', NULL, '{}', true),
  (tech_id,   'tech',   'Mike Rodriguez',  'mike@apexbuilders.com',   '+1 (555) 300-0003', NULL, ARRAY['electrical','hvac'], true)
ON CONFLICT (id) DO UPDATE SET
  role       = EXCLUDED.role,
  full_name  = EXCLUDED.full_name,
  phone      = EXCLUDED.phone,
  skills     = EXCLUDED.skills;

-- ============================================================
-- PROJECTS
-- ============================================================

-- Sarah's active kitchen renovation (client dashboard hero project)
INSERT INTO projects (id, title, description, address, status, category, priority, client_id, assigned_tech_id, budget, amount_spent, start_date, estimated_completion, phases)
VALUES (
  project1_id,
  '124 Maple Drive — Kitchen Renovation',
  'Complete kitchen gut renovation including new electrical, plumbing rough-in, custom cabinetry, marble countertops, and premium appliance installation.',
  '124 Maple Drive, Austin TX 78701',
  'in_progress',
  'renovation',
  'normal',
  client_id,
  tech_id,
  190000.00,
  124500.00,
  '2024-03-01',
  '2024-10-15',
  '[
    {"phase": "Design Phase", "status": "completed", "completedDate": "2024-03-15"},
    {"phase": "Foundation", "status": "completed", "completedDate": "2024-04-02"},
    {"phase": "Electrical", "status": "in_progress", "progress": 80},
    {"phase": "Finishing & Paint", "status": "pending"}
  ]'::jsonb
);

-- Admin dashboard projects
INSERT INTO projects (id, title, description, address, status, category, priority, client_id, assigned_tech_id, budget, amount_spent, start_date, estimated_completion)
VALUES
  (
    project2_id,
    'Skyline Tower',
    'Multi-floor commercial electrical upgrade and HVAC system installation.',
    'Downtown District, New York NY',
    'in_progress',
    'electrical',
    'high',
    client_id,
    tech_id,
    850000.00,
    637500.00,
    '2024-01-15',
    '2024-11-30'
  ),
  (
    project3_id,
    'Riverfront Park',
    'Complete plumbing and electrical for new park facilities.',
    'Westside, Los Angeles CA',
    'completed',
    'plumbing',
    'normal',
    client_id,
    tech_id,
    340000.00,
    340000.00,
    '2023-09-01',
    '2024-04-01'
  ),
  (
    project4_id,
    'Urban Lofts',
    'Residential renovation — awaiting city permit approval.',
    'Midtown, Austin TX 78705',
    'scheduled',
    'renovation',
    'normal',
    client_id,
    tech_id,
    420000.00,
    189000.00,
    '2024-05-01',
    '2024-12-01'
  );

-- ============================================================
-- PROJECT LOGS
-- ============================================================
INSERT INTO project_logs (project_id, author_id, description, log_type, progress_pct)
VALUES
  (project1_id, tech_id, 'Main breaker panel has been installed and inspected. All wiring passed city code review.', 'status_update', 75),
  (project1_id, tech_id, 'Kitchen island wiring 80% complete. Running conduit for under-cabinet lighting tomorrow.', 'note', 80),
  (project1_id, admin_id, 'Uploaded updated blueprints with revised island placement. Reviewed with Sarah — she approved.', 'note', NULL),
  (project2_id, tech_id, 'Floor 3 electrical complete. Moving to floor 4 tomorrow. On schedule.', 'status_update', 75),
  (project3_id, tech_id, 'Final inspection passed. All systems operational. Project marked complete.', 'status_update', 100);

-- ============================================================
-- INVOICES
-- ============================================================
INSERT INTO invoices (project_id, client_id, number, description, total, balance, status, due_date)
VALUES
  (project1_id, client_id, 'INV-001', 'Foundation Work — Labor & Materials',        32000.00,  0.00,     'paid',    '2024-03-20'),
  (project1_id, client_id, 'INV-002', 'Design & Permits',                            8500.00,   0.00,     'paid',    '2024-01-25'),
  (project1_id, client_id, 'INV-003', 'Concrete Slab — Basement Level',             12000.00,  0.00,     'paid',    '2024-04-20'),
  (project1_id, client_id, 'INV-004', 'Electrical — Phase 1 Wiring',                 5000.00,  0.00,     'paid',    '2024-05-15'),
  (project1_id, client_id, 'INV-005', 'Electrical — Phase 2 (Kitchen & Island)',    15000.00,  15000.00, 'pending', '2024-06-01'),
  (project2_id, client_id, 'INV-006', 'Skyline Tower — Electrical Phase 1',        200000.00,  0.00,     'paid',    '2024-03-01'),
  (project2_id, client_id, 'INV-007', 'Skyline Tower — HVAC Installation',         187500.00,  75000.00, 'pending', '2024-07-15'),
  (project4_id, client_id, 'INV-008', 'Urban Lofts — Design & Pre-Construction',    42000.00,  42000.00, 'overdue', '2024-05-01');

-- ============================================================
-- ASSETS
-- ============================================================
INSERT INTO assets (name, category, status, current_holder_id, condition, notes)
VALUES
  ('DeWalt Impact Driver Set',   'Power Tools',    'checked_out', tech_id, 'Good',      'Checked out for Maple Drive job'),
  ('Fluke Multimeter 117',       'Electrical',     'available',   NULL,    'Excellent',  'Calibrated March 2024'),
  ('Extension Ladder — 24ft',   'Safety',         'available',   NULL,    'Good',       NULL),
  ('Milwaukee Circular Saw',     'Power Tools',    'available',   NULL,    'Fair',       'Blade needs replacement soon'),
  ('Conduit Bender Kit',         'Electrical',     'checked_out', tech_id, 'Good',      'On site at Maple Drive'),
  ('Safety Harness Set x3',      'Safety',         'available',   NULL,    'Excellent',  'Passed annual inspection Feb 2024'),
  ('Pipe Threading Machine',     'Plumbing',       'available',   NULL,    'Good',       NULL),
  ('Generator — 6500W',          'Power Equipment','available',   NULL,    'Good',       'Full tank of gas');

-- ============================================================
-- ASSET LOGS
-- ============================================================
INSERT INTO asset_logs (asset_id, user_id, action, notes)
SELECT a.id, tech_id, 'check_out', 'Needed for kitchen electrical at Maple Drive'
FROM assets a WHERE a.name = 'DeWalt Impact Driver Set';

INSERT INTO asset_logs (asset_id, user_id, action, notes)
SELECT a.id, tech_id, 'check_out', 'Conduit runs for kitchen island wiring'
FROM assets a WHERE a.name = 'Conduit Bender Kit';

END $$;
