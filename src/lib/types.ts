/**
 * Centralized TypeScript types for all Supabase database tables.
 * Mirrors the schema in supabase/migrations/001_initial_schema.sql
 */

// ============================================================
// ENUMS
// ============================================================
export type UserRole = "admin" | "client" | "tech";
export type ProjectStatus = "new" | "scheduled" | "in_progress" | "completed" | "invoiced";
export type ProjectCategory = "hvac" | "plumbing" | "roofing" | "electrical" | "renovation" | "construction" | "other";
export type ProjectPriority = "low" | "normal" | "high" | "urgent";
export type InvoiceStatus = "pending" | "paid" | "overdue";
export type AssetStatus = "available" | "checked_out" | "maintenance";
export type AssetAction = "check_in" | "check_out";
export type LogType = "note" | "photo" | "video" | "signature" | "status_update";

// ============================================================
// DATABASE ROW TYPES
// ============================================================

export interface Profile {
  id: string;
  role: UserRole;
  full_name: string;
  email: string;
  phone: string | null;
  address: string | null;
  avatar_url: string | null;
  skills: string[];
  is_active: boolean;
  on_leave: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string | null;
  address: string | null;
  status: ProjectStatus;
  category: ProjectCategory;
  priority: ProjectPriority;
  client_id: string | null;
  assigned_tech_id: string | null;
  budget: number | null;
  amount_spent: number;
  start_date: string | null;
  end_date: string | null;
  estimated_completion: string | null;
  phases: ProjectPhase[];
  thumbnail_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectPhase {
  phase: string;
  status: "pending" | "in_progress" | "completed";
  completedDate?: string;
  progress?: number;
}

export interface ProjectLog {
  id: string;
  project_id: string;
  author_id: string | null;
  description: string;
  log_type: LogType;
  media_urls: string[];
  progress_pct: number | null;
  created_at: string;
}

export interface Invoice {
  id: string;
  project_id: string;
  client_id: string | null;
  number: string;
  description: string | null;
  total: number;
  balance: number;
  discount: number;
  due_date: string | null;
  status: InvoiceStatus;
  pdf_url: string | null;
  created_at: string;
}

export interface Asset {
  id: string;
  name: string;
  category: string | null;
  status: AssetStatus;
  current_holder_id: string | null;
  condition: string | null;
  notes: string | null;
  created_at: string;
}

export interface AssetLog {
  id: string;
  asset_id: string;
  user_id: string | null;
  action: AssetAction;
  notes: string | null;
  created_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service_type: string | null;
  notes: string | null;
  status: string;
  created_at: string;
}

// ============================================================
// JOINED / ENRICHED TYPES (for queries that JOIN tables)
// ============================================================

export interface ProjectWithRelations extends Project {
  client?: Pick<Profile, "id" | "full_name" | "email" | "phone" | "avatar_url"> | null;
  tech?: Pick<Profile, "id" | "full_name" | "email" | "phone" | "avatar_url" | "skills"> | null;
  invoices?: Invoice[];
  logs?: ProjectLog[];
}

export interface AssetWithHolder extends Asset {
  holder?: Pick<Profile, "id" | "full_name" | "avatar_url"> | null;
}

// ============================================================
// QUERY RESPONSE TYPES
// ============================================================

export interface AdminDashboardStats {
  totalRevenue: number;
  activeProjects: number;
  pendingInvoices: number;
  overdueInvoices: number;
  activeTechs: number;
  newRequests: number;
}

export interface ClientDashboardData {
  activeProject: ProjectWithRelations | null;
  recentInvoices: Invoice[];
  recentLogs: ProjectLog[];
}

export interface TechDashboardData {
  assignedJobs: ProjectWithRelations[];
  upcomingSchedule: ProjectWithRelations[];
  checkedOutAssets: AssetWithHolder[];
}
