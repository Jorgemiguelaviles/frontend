function BancoDeDadosReal() {
  return (
    <>
      <p>
        No desenvolvimento real deste projeto, a primeira intenção foi utilizar
        <strong> MySQL</strong> como banco de dados relacional. Todo o código
        foi estruturado para permitir a conexão futura com MySQL, incluindo
        scripts de criação de tabelas e lógica de acesso.
      </p>

      <p>
        Entretanto, devido a limitações técnicas e para agilizar o fluxo de
        processamento e validação das reclamações, optamos por utilizar um
        arquivo <strong>JSON</strong> como armazenamento temporário.
      </p>

      <p>
        Esse arquivo JSON representa de forma simplificada o fluxo de dados que
        seria gerenciado pelo banco, permitindo atualizar e consultar registros
        enquanto mantemos a arquitetura preparada para migração futura.
      </p>

      <p>
        Essa decisão mantém o foco no domínio e na lógica do projeto, sem
        comprometer a possibilidade de evolução para MySQL ou outro banco
        relacional posteriormente.
      </p>
    </>
  );
}

export default BancoDeDadosReal;
