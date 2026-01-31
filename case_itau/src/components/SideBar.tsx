import { Link } from "react-router-dom";
import "../style/SideBar.css";
import type { PageRoute } from "../routes/index";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  pages: PageRoute[];
}

function SideBar({ open, onClose, pages }: SideBarProps) {
  return (
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <button className="sidebar-close" onClick={onClose}>
        ✕
      </button>

      <h2 className="sidebar-title">Menu</h2>

      <nav className="sidebar-nav">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="sidebar-link"
            onClick={onClose}
          >
            {page.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
