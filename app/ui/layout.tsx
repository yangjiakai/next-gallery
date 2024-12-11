import UISidebar from "@/components/layouts/ui-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-[calc(100vh-4rem)]">
        <UISidebar />
        <div className="flex-1 w-full h-full p-5 ">{children}</div>
      </div>
    </SidebarProvider>
  );
}
