import { PageHeader } from "@/components/ui/PageHeader";
import { getAllAssets } from "@/lib/queries";
import { AssetCheckoutCard } from "@/components/tech/AssetCheckoutCard";
import { createClient } from "@/lib/supabase/server";

// Demo tech UUID — replaced with session user ID once auth is wired
const DEMO_TECH_ID = "c26995ea-07f9-4f14-8619-d25f352a3165";

export default async function TechToolsAssetsPage() {
  // Get the current session user id; fall back to demo id
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const techId = user?.id ?? DEMO_TECH_ID;

  const assets = await getAllAssets();

  const available = assets.filter((a) => a.status === "available").length;
  const inUse = assets.filter((a) => a.status === "checked_out").length;

  return (
    <div className="flex-1 w-full max-w-[1600px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end justify-between mb-12">
        <PageHeader
          title="Tools & Equipment"
          subtitle="Manage your inventory, track assets, and handle checkouts efficiently."
          titleHighlight="Equipment"
        />

        {/* Stats summary */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="text-center">
            <p className="text-3xl font-black text-white">{available}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Available</p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-3xl font-black text-orange-400">{inUse}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">In Use</p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-3xl font-black text-slate-300">{assets.length}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Total</p>
          </div>
        </div>
      </div>

      {assets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
          <span className="material-symbols-outlined text-5xl mb-4">inventory_2</span>
          <p className="font-semibold text-lg">No assets found</p>
          <p className="text-sm mt-1">Assets will appear here once added to inventory.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assets.map((asset) => (
            <AssetCheckoutCard
              key={asset.id}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              asset={asset as any}
              techId={techId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
