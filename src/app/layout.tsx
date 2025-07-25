import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/layout/Sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "DataHub",
  description: "Быстро. Просто. Эффективно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <main>{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
