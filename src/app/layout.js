import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";

const montserrat = Montserrat({ subsets: ["latin"] }); // Define Montserrat font

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <section className="flex  h-screen">{children}</section>
      </body>
    </html>
  );
}
