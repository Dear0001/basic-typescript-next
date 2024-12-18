"use client";
import "@/app/globals.css";
import { SidebarComponent } from "@/components/sidebar/SidebarComponent";
import { MenuIcon } from "@/components/icon/FontAwsome";
import { useState } from "react";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(true);

  return (
    <html>
      <body className="flex none-scroll-bar overflow-x-auto">
        <MenuIcon
          onClcik={() => setIsShowSideBar(!isShowSideBar)}
          classname="h-8 w-8 fixed bottom-0 m-4 cursor-pointer lg:hidden"
        />
        <aside className={`sticky left-0 z-10 h-screen ${isShowSideBar && "hidden"} lg:block`}>
          <SidebarComponent />
        </aside>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
