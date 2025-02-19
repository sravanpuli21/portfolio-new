import type { Metadata } from "next";
import { promises as fs } from "fs";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const file = await fs.readFile(
    process.cwd() + "/public/content/profileData.json",
    "utf8"
  );
  const cv = JSON.parse(file);
  return {
    title: cv.general.displayName,
    description: cv.general.byline || "",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
