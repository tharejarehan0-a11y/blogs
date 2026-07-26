import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Rehan Blogs",
  description: "Rehan Thareja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <body className="min-h-full flex flex-col ">
        {children} 
         </body>
    </html>
  );
}
