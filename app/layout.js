import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easybank",
  description: "Bank Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter} >{children}</body>
    </html>
  );
}
