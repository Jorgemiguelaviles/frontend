import { useRef } from "react";
import { useCanalDeReclamacao } from "../hooks/useCanalDeReclamacao";
import "../style/CanalDeReclamacao.css";

function CanalDeReclamacao() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    onSubmit,
    errors,
    isValid,
    possuiArquivo,
    nomeArquivo,
    handleFileChange,
    handleRemoveFile,
    isSubmitting,
    respostaBack,
    watch,
  } = useCanalDeReclamacao();

  const tipoDocumento = watch("tipo_documento") || "CPF";

  /* ============================================================
     RENDERIZADORES AUXILIARES (BACKEND)
     ============================================================ */

  const rendererErrosBackend = (textoVerificado: any, titulo: string) => {
    if (!textoVerificado) return null;
    const erros = Object.entries(textoVerificado).filter(([_, v]) => v !== null);
    if (erros.length === 0) return null;

    return (
      <div className="backend-error-box">
        <h4>⚠️ Erros de Validação ({titulo}):</h4>
        <ul>
          {erros.map(([key, value]) => (
            <li key={key}><strong>{key.replace("_", " ")}:</strong> {String(value)}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderClassificacao = (dados: any, titulo: string) => {
    // Verifica se há qualquer classificação para mostrar
    const temCategorias = 
      (dados?.classificacoes_primarias?.length > 0) || 
      (dados?.classificacoes_secundarias?.length > 0);

    if (!dados || !temCategorias) return null;

    return (
      <div className="classificacao-card-item">
        <h4 className="classificacao-subtitulo">{titulo}</h4>
        <div className="badge-container">
          {dados.classificacoes_primarias.map((tag: string) => (
            <span key={tag} className="badge badge-primaria">{tag}</span>
          ))}
          {dados.classificacoes_secundarias.map((tag: string) => (
            <span key={tag} className="badge badge-secundaria">{tag}</span>
          ))}
          {dados.classificacoes_terciarias?.map((tag: string) => (
            <span key={tag} className="badge badge-terciaria">{tag}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="header-container">
        <header className="canal-header">
          <h1 className="canal-title">Canal de Reclamação</h1>
          <p className="canal-subtitle">Preencha os dados abaixo para processarmos sua solicitação.</p>
        </header>
      </section>

      <section className="canal-container">
        <form onSubmit={onSubmit} className="canal-card">
          <div className="canal-form-grid">
            <div className="canal-field">
              <label>Nome completo</label>
              <input className={`canal-input ${errors.nome_completo ? "input-error" : ""}`} {...register("nome_completo")} />
              {errors.nome_completo && <span className="canal-error">{errors.nome_completo.message}</span>}
            </div>

            <div className="canal-field">
              <label>Tipo de documento</label>
              <select className="canal-input" {...register("tipo_documento")}>
                <option value="CPF">CPF</option>
                <option value="CNPJ">CNPJ</option>
              </select>
            </div>

            <div className="canal-field">
              <label>{tipoDocumento}</label>
              <input className={`canal-input ${errors.cpf_cnpj ? "input-error" : ""}`} {...register("cpf_cnpj")} />
              {errors.cpf_cnpj && <span className="canal-error">{errors.cpf_cnpj.message}</span>}
            </div>

            <div className="canal-field">
              <label>Agência / Conta</label>
              <input className={`canal-input ${errors.agencia_conta ? "input-error" : ""}`} {...register("agencia_conta")} />
              {errors.agencia_conta && <span className="canal-error">{errors.agencia_conta.message}</span>}
            </div>

            <div className="canal-field">
              <label>Data de nascimento</label>
              <input type="date" className={`canal-input ${errors.data_nascimento ? "input-error" : ""}`} {...register("data_nascimento")} />
              {errors.data_nascimento && <span className="canal-error">{errors.data_nascimento.message}</span>}
            </div>
          </div>

          <div className="canal-field canal-field-full">
            <label>Descrição da reclamação</label>
            <textarea className={`canal-textarea ${errors.descricao_reclamacao ? "input-error" : ""}`} {...register("descricao_reclamacao")} />
            {errors.descricao_reclamacao && <span className="canal-error">{errors.descricao_reclamacao.message}</span>}
          </div>

          <div className="canal-upload">
            <input ref={fileInputRef} type="file" accept=".pdf,.docx,.txt" style={{ display: "none" }} onChange={handleFileChange} />
            <div className="canal-upload-actions">
              <button type="button" className="canal-upload-button" onClick={() => fileInputRef.current?.click()} disabled={isSubmitting}>
                {possuiArquivo ? "Alterar arquivo" : "Anexar arquivo"}
              </button>
              <button type="button" className="canal-remove-button" onClick={() => handleRemoveFile(fileInputRef)} disabled={!possuiArquivo || isSubmitting}>
                Remover
              </button>
            </div>
            {possuiArquivo && <div className="canal-file-name">📎 {nomeArquivo}</div>}
          </div>

          <button type="submit" className="canal-submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Reclamação"}
          </button>
        </form>
      </section>


      <section  className="canal-container">
        {respostaBack && (
          <div className="canal-card canal-response success">
            <h2 className="response-title">✅ Análise da Reclamação</h2>
            
            <div className="validation-results">
              {rendererErrosBackend(respostaBack.resultado?.reclamacao_digital?.texto_verificado, "Dados do Formulário")}
              {rendererErrosBackend(respostaBack.resultado?.reclamacao_fisica?.texto_verificado, "Dados do Documento")}
            </div>

            {/* Container que agora força um item abaixo do outro */}
            <div className="classification-vertical-stack">
              <h3 className="section-title-small">Categorias Identificadas</h3>
              {renderClassificacao(respostaBack.resultado?.classificacao?.digital, "Análise do Formulário Digitado")}
              {renderClassificacao(respostaBack.resultado?.classificacao?.fisica, "Análise do Anexo (OCR)")}
            </div>

            <details className="json-details">
              <summary>Ver dados técnicos (JSON)</summary>
              <pre className="json-display">
                {JSON.stringify(respostaBack.resultado, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </section>

<button 
  type="submit" 
  className="canal-submit" 
  disabled={!isValid || isSubmitting}
>
  {isSubmitting ? "Enviando..." : "Enviar Reclamação"}
</button>
    </>
  );
}

export default CanalDeReclamacao;