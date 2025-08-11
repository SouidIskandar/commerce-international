import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Trade | Premium Mediterranean Goods",
  description: "Exporting the finest olive oil, sheep wool and handicrafts worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}