import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Rehan Thareja",
  description:
    "Student developer building robotics, AI, web applications and open-source software.",

  keywords: [
    "Rehan Thareja",
    "Student Developer",
    "React",
    "Next.js",
    "Hack Club",
    "Portfolio",
    "Open Source",
    "Robotics",
    "AI"
  ],

  openGraph: {
    title: "Rehan Thareja",
    description:
      "Student developer building robotics, AI and web applications.",
    url: "https://rehanthareja.vercel.app",
    siteName: "Rehan Thareja",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
