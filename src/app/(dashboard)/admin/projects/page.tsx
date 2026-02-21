import { getAllProjects } from "@/lib/queries";
import ProjectsPageClient from "@/components/admin/ProjectsPageClient";

export default async function AdminProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsPageClient projects={projects} />;
}
