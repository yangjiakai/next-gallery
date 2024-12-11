import Footer from "@/components/footer/Footer";
import AppHeader from "@/components/layouts/app-header";
export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  );
}
