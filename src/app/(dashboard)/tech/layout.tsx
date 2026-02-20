import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function TechnicianLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex h-screen w-full overflow-hidden bg-background text-foreground selection:bg-primary selection:text-background font-sans">
        {/* Unified Premium Sidebar */}
        <AppSidebar role="tech" />

        <SidebarInset className="flex-1 w-full bg-transparent overflow-x-hidden min-w-0">
          {/* Mobile Header with Sidebar Trigger */}
          <header className="flex h-16 shrink-0 items-center gap-2 px-4 md:hidden">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-white" />
          </header>

          <main className="h-full p-4 md:p-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 h-full">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
