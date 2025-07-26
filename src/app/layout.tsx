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
      <SidebarProvider>
        <body className="flex">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navbar />
            <>{children}</>
          </main>
        </body>
      </SidebarProvider>
    </html>
  );
}
