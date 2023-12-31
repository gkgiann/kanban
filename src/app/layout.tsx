import { Sidebar } from "./components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { KanbanContextProvider } from "./kanban";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban",
  description: "Kanban",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex bg-gray-50">
          <KanbanContextProvider>
            <Sidebar />
            {children}
          </KanbanContextProvider>
        </div>
      </body>
    </html>
  );
}
