import { useState } from "react";
import "../style/VisualizacaoDasReclamacoes.css";

type Reclamacao = {
  id: number;
  nome: string;
  classificacao: string;
  textoDigitado: string;
  textoAnexo: string;
  agenciaConta?: string;
  dataOcorrida?: string;
  documentoRetorno?: {
    tipo: "pdf";
    url: string;
  };
};

const reclamacoesMock: Reclamacao[] = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  nome: `Cliente ${i + 1}`,
  classificacao: i % 2 === 0 ? "Alta Prioridade" : "Baixa Prioridade",
  textoDigitado:
    "Relato digitado pelo cliente descrevendo o problema enfrentado.",
  textoAnexo:
    "Conteúdo extraído automaticamente de um arquivo anexado (PDF/DOCX/TXT).",
  agenciaConta: `000${i + 1}/12345-${i + 1}`,
  dataOcorrida: `2026-01-${(i % 28) + 1}`.padStart(10, "0"),
  documentoRetorno:
    i % 3 === 0
      ? {
          tipo: "pdf",
          url: "#",
        }
      : undefined,
}));

const ITENS_POR_PAGINA = 10;

function VisualizacaoDasReclamacoes() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Estados de filtro
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroAgenciaConta, setFiltroAgenciaConta] = useState("");
  const [filtroData, setFiltroData] = useState("");

  // Filtragem antes da paginação
  const reclamacoesFiltradas = reclamacoesMock.filter((rec) => {
    const nomeMatch = rec.nome.toLowerCase().includes(filtroNome.toLowerCase());
    const agenciaMatch = rec.agenciaConta
      ? rec.agenciaConta.includes(filtroAgenciaConta)
      : true;
    const dataMatch = rec.dataOcorrida
      ? rec.dataOcorrida.includes(filtroData)
      : true;
    return nomeMatch && agenciaMatch && dataMatch;
  });

  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;

  const reclamacoesVisiveis = reclamacoesFiltradas.slice(inicio, fim);

  const temPaginaAnterior = paginaAtual > 1;
  const temProximaPagina = fim < reclamacoesFiltradas.length;

  return (
    <section className="visualizacao-container">
      <h1 className="visualizacao-title">Visualização das Reclamações</h1>

      {/* FILTROS */}
<div className="filtros-grid">
  <input
    type="text"
    placeholder="Filtrar por nome completo"
    value={filtroNome}
    className="canal-input"
    onChange={(e) => setFiltroNome(e.target.value)}
  />
  <input
    type="text"
    placeholder="Filtrar por agência / conta"
    value={filtroAgenciaConta}
    className="canal-input"
    onChange={(e) => setFiltroAgenciaConta(e.target.value)}
  />
  <input
    type="date"
    className="canal-input"
    value={filtroData}
    onChange={(e) => setFiltroData(e.target.value)}
  />

  {/* BOTÃO APLICAR FILTROS */}
  <button
    className="filtros-submit"
    onClick={() => setPaginaAtual(1)} // garante reset da página
  >
    Aplicar Filtros
  </button>
</div>

      {/* LISTA DE RECLAMAÇÕES */}
      <div className="reclamacoes-lista">
        {reclamacoesVisiveis.length === 0 && (
          <p className="nenhum-result">Nenhuma reclamação encontrada.</p>
        )}

        {reclamacoesVisiveis.map((rec) => (
          <article key={rec.id} className="reclamacao-card">
            <header className="reclamacao-header">
              <span className="reclamacao-classificacao">
                {rec.classificacao}
              </span>
              <span className="reclamacao-nome">{rec.nome}</span>
            </header>

            <section className="reclamacao-bloco">
              <h3>Texto Digitado</h3>
              <p>{rec.textoDigitado}</p>
            </section>

            <section className="reclamacao-bloco">
              <h3>Texto Anexado</h3>
              <p>{rec.textoAnexo}</p>
            </section>

            <footer className="reclamacao-footer">
              {rec.agenciaConta && <p>Agência / Conta: {rec.agenciaConta}</p>}
              {rec.dataOcorrida && <p>Data: {rec.dataOcorrida}</p>}
              {rec.documentoRetorno && (
                <a
                  href={rec.documentoRetorno.url}
                  className="reclamacao-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baixar documento (PDF)
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      <div className="paginacao-controles">
        {temPaginaAnterior && (
          <button
            className="carregar-mais"
            onClick={() => setPaginaAtual((prev) => prev - 1)}
          >
            ⬆ Voltar
          </button>
        )}

        {temProximaPagina && (
          <button
            className="carregar-mais"
            onClick={() => setPaginaAtual((prev) => prev + 1)}
          >
            ⬇ Próximas 10 reclamações
          </button>
        )}
      </div>
    </section>
  );
}

export default VisualizacaoDasReclamacoes;
