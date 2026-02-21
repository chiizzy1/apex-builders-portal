import { getAllTechnicians } from "@/lib/queries";
import TeamPageClient from "@/components/admin/TeamPageClient";

export default async function AdminTeamPage() {
  const technicians = await getAllTechnicians();
  return <TeamPageClient technicians={technicians} />;
}
