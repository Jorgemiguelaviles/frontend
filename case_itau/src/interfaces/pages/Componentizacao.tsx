import Documentacao from "../components/Documentacao";
import AlternadorIdealReal from "../components/AlternadorIdealReal";
import ComponentizacaoIdeal from "../components/ComponentizacaoIdeal";
import ComponentizacaoReal from "../components/ComponentizacaoReal";

function ComponentizacaoPage() {
  return (
    <Documentacao
      titulo="4. Componentização e Arquitetura"
      subtitulo="Comparação entre estrutura ideal e implementação real do projeto"
    >
      <p>
        A componentização do sistema e a organização das camadas são essenciais
        para garantir escalabilidade, manutenibilidade e facilidade de evolução
        do projeto.
      </p>

      <p>
        Nesta página, apresentamos o que seria considerado uma arquitetura ideal
        em um cenário serverless na AWS, comparando com a implementação real
        adotada no projeto.
      </p>

      <h2>Estrutura Ideal (AWS / Serverless)</h2>

      <p>
        A proposta ideal busca **desacoplamento máximo entre camadas**, utilizando
        eventos, filas e funções Lambda para criar um fluxo resiliente e escalável.
        Cada camada possui responsabilidades bem definidas:
      </p>

      <ul>
        <li>
          <strong>domain/</strong>: Entidades, serviços e lógica de negócio,
          completamente independente de infraestrutura.
        </li>
        <li>
          <strong>application/</strong>: Orquestra use cases e DTOs, coordenando
          operações entre domínio e infraestrutura.
        </li>
        <li>
          <strong>infrastructure/</strong>: Serviços serverless para persistência,
          integração com APIs externas, S3, DynamoDB e filas SQS.
        </li>
        <li>
          <strong>interfaces/</strong>: API Gateway, Lambdas de entrada, notificações
          via SNS, dashboards e triggers de eventos.
        </li>
      </ul>

      <p>
        Esse fluxo permite evoluir cada camada independentemente, reduzindo acoplamento
        e custos operacionais, além de favorecer testes isolados.
      </p>

      <h2>Comparação Ideal x Real</h2>

      <AlternadorIdealReal
        ideal={<ComponentizacaoIdeal />}
        real={<ComponentizacaoReal />}
      />

      <p>
        A visualização lado a lado permite identificar onde a arquitetura real
        diverge do ideal, servindo como guia para futuras melhorias na evolução
        do projeto.
      </p>
    </Documentacao>
  );
}

export default ComponentizacaoPage;
