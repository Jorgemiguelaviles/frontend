import "../style/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-logo">Itaú</span>

        <nav className="footer-nav">
          <a href="#" className="footer-link">Privacidade</a>
          <a href="#" className="footer-link">Termos de uso</a>
          <a href="#" className="footer-link">Segurança</a>
          <a href="#" className="footer-link">Contato</a>
        </nav>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Itaú Unibanco. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
