import "../../shared/style/DocumentacaoProps.css";

interface DocumentacaoProps {
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}

function Documentacao({ titulo, subtitulo, children }: DocumentacaoProps) {
  return (
    <section className="arquitetura-container">
      <header className="arquitetura-header">
        <h1 className="arquitetura-title">{titulo}</h1>

        {subtitulo && (
          <p className="arquitetura-subtitle">
            {subtitulo}
          </p>
        )}
      </header>

      <div className="arquitetura-content">
        {children}
      </div>
    </section>
  );
}

export default Documentacao;
