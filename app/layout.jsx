import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social links profile",
  description: "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen`}>{children}</body>
    </html>
  );
}
