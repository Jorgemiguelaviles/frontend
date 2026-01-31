import Documentacao from "./Documentacao";

function arquiteturaDeSoftareReal() {
  return (
    <Documentacao
      titulo="3. Arquitetura de Software Adotada"
      subtitulo="Definição da arquitetura efetivamente utilizada no desenvolvimento do projeto"
    >
      <p>
        A arquitetura de software adotada neste projeto foi orientada pelos
        princípios do <strong>Domain-Driven Design (DDD)</strong>, com o objetivo
        de estruturar o sistema de forma clara, coesa e alinhada às regras de
        negócio envolvidas no processamento de reclamações.
      </p>

      <p>
        Diferentemente de uma abordagem puramente técnica ou focada em
        infraestrutura, o DDD prioriza o domínio do problema, organizando o
        código de acordo com responsabilidades bem definidas e separação
        explícita de camadas.
      </p>

      <h2>Domain-Driven Design (DDD)</h2>

      <p>
        O núcleo da aplicação foi estruturado em torno do domínio de
        reclamações, representado por entidades, serviços de domínio e regras
        de validação que refletem diretamente o problema real que o sistema se
        propõe a resolver.
      </p>

      <p>
        Entidades como <em>Reclamacao</em> representam conceitos centrais do
        negócio, enquanto serviços de domínio são responsáveis por operações
        como tratamento, validação e classificação das informações recebidas,
        mantendo o domínio isolado de detalhes de infraestrutura.
      </p>

      <h2>Separação de Camadas</h2>

      <p>
        A aplicação foi organizada em camadas bem definidas, separando
        claramente responsabilidades entre domínio, aplicação, infraestrutura
        e interfaces de entrada.
      </p>

      <p>
        Essa separação permite que detalhes como interface gráfica, extração de
        dados, entrada via JSON ou possíveis integrações futuras não impactem
        diretamente as regras centrais do negócio, garantindo maior
        manutenibilidade e facilidade de evolução do sistema.
      </p>

      <p>
        Embora o projeto possa futuramente ser adaptado para uma arquitetura
        orientada a eventos ou serverless, a implementação atual prioriza a
        clareza arquitetural, a organização do domínio e a aderência aos
        princípios de engenharia de software, atendendo plenamente aos
        requisitos propostos para o desafio.
      </p>
    </Documentacao>
  );
}

export default arquiteturaDeSoftareReal;
