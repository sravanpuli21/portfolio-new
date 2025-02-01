import styles from "./page.module.css";
import { promises as fs } from "fs";
import Profile from "./Profile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/content/profileData.json",
    "utf8"
  );
  const cv = JSON.parse(file);

  return (
    <div className="w-full h-full">
      <Header />
      <div className={styles.page}>
        <Profile cv={cv} />
      </div>
      <Footer />
    </div>
  );
}
