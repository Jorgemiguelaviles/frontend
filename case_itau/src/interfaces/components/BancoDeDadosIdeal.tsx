function BancoDeDadosIdeal() {
  return (
    <>
      <p>
        No cenário ideal, a persistência de dados seria realizada utilizando o
        <strong> Amazon Aurora</strong>, um banco de dados relacional gerenciado
        pela AWS.
      </p>

      <p>
        O Aurora oferece compatibilidade com MySQL e PostgreSQL, aliada a um
        desempenho significativamente superior, podendo alcançar até
        <strong> 10 vezes mais performance</strong> em relação a instâncias
        MySQL tradicionais.
      </p>

      <p>
        Sua capacidade de escalabilidade automática e o gerenciamento completo
        da infraestrutura pela AWS reduzem custos operacionais, riscos de
        indisponibilidade e a complexidade de manutenção.
      </p>

      <p>
        Essa abordagem permitiria que o time focasse exclusivamente na lógica de
        negócio e na evolução funcional do sistema.
      </p>
    </>
  );
}

export default BancoDeDadosIdeal;
