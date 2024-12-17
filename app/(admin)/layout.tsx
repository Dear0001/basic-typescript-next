import "@/app/globals.css";
import { SidebarComponent } from "@/components/sidebar/SidebarComponent"
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <aside className="fixed h-screen">
          <SidebarComponent/>
        </aside>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}