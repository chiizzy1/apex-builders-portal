import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";

export default function ClientDocumentsPage() {
  const documents = [
    { name: "Initial Contract.pdf", type: "PDF", date: "Oct 1, 2026", icon: "description" },
    { name: "Kitchen 3D Renders.zip", type: "Archive", date: "Oct 15, 2026", icon: "folder_zip" },
    { name: "Plumbing Fixtures Specs.pdf", type: "PDF", date: "Nov 2, 2026", icon: "description" },
    { name: "Permit Approvals.pdf", type: "PDF", date: "Nov 10, 2026", icon: "verified" },
    { name: "Custom Cabinetry Invoice.pdf", type: "Invoice", date: "Dec 12, 2026", icon: "receipt_long" },
  ];

  return (
    <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-8">
      <PageHeader title="Project Documents" subtitle="View and download important files related to your build.">
        <PillButton icon="upload" variant="primary">
          Upload File
        </PillButton>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, idx) => (
          <FloatingCard
            key={idx}
            padding="default"
            className="flex items-center gap-4 hover:border-[#0df2f2]/30 transition-colors group cursor-pointer"
          >
            <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-[#0df2f2] group-hover:bg-[#0df2f2]/10 transition-colors">
              <span className="material-symbols-outlined text-2xl">{doc.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold truncate group-hover:text-[#0df2f2] transition-colors">{doc.name}</h3>
              <p className="text-sm text-slate-500">
                {doc.date} &bull; {doc.type}
              </p>
            </div>
            <div className="text-slate-500 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">download</span>
            </div>
          </FloatingCard>
        ))}
      </div>
    </div>
  );
}
