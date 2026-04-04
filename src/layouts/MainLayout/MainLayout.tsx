import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";
import menuData from "../../Components/SidebarSection/menuData";

import SidebarSection from "../../Components/SidebarSection/SidebarSection";
import { Footer } from "../../Components/FooterSection";
import BottomTabs from "../../Components/BottomTabs/BottomTabs";

export default function MainLayout() {
  return (
    <>
      <div className={styles.mainlayout}>
        <aside className={styles.sidebar}>
          <h1>Melodies</h1>
          {menuData.children.map((section, index) => (
            <SidebarSection key={index} section={section} />
          ))}
        </aside>
        <div>
          <div className={styles.contentArea}>
            <main>
              <Outlet />
              <Footer />
            </main>
          </div>
          <div className={styles.bottomBar}>
            <BottomTabs />
          </div>
        </div>
      </div>
    </>
  );
}
