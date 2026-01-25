import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";
import menuData from "../../Components/SidebarSection/menuData";

import SidebarSection from "../../Components/SidebarSection/SidebarSection";

export default function MainLayout() {
  return (
    <div className={styles.mainlayout}>
      <aside className={styles.sidebar}>
        <h1>Melodies</h1>
        {menuData.children.map((section, index) => (
          <SidebarSection key={index} section={section} />
        ))}
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
