import "./globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NavbarComponent/>
        {children}
      </body>
    </html>
  );
}
