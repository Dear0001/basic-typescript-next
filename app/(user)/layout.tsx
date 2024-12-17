import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
