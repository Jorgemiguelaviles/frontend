import "../style/Header.css";

interface HeaderProps {
  onToggleSidebar: () => void;
}

function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <button className="header-menu" onClick={onToggleSidebar}>
        ☰
      </button>

      <div className="header-logo">
        Itaú
      </div>

      <nav className="header-nav" />
    </header>
  );
}

export default Header;
