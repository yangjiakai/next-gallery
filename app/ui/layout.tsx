import UISidebar from "@/components/layouts/ui-sidebar";

export default function UILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <UISidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
