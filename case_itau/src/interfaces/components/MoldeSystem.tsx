import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../../shared/style/MoldeSystem.css";
import { pages } from "../../application/routes";

function MoldeSystem() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="molde-system">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="molde-body">
        <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} pages={pages}/>

        <main className="molde-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MoldeSystem;
