import Documentacao from "./Documentacao";

function arquiteturaDeSoftareIdeal() {
  return (
    <Documentacao
      titulo="3. Arquitetura de Software Recomendada"
      subtitulo="Definição da arquitetura adotada para sustentar o fluxo do projeto"
    >
      <p>
        A escolha de uma arquitetura de software adequada depende diretamente
        do contexto do projeto, do volume de requisições e dos requisitos de
        escalabilidade e custo operacional.
      </p>

      <p>
        Considerando o cenário proposto, bem como o padrão amplamente adotado
        pelo banco em seus ecossistemas tecnológicos — com forte presença da
        AWS —, é possível identificar com clareza que a abordagem mais adequada
        é baseada em dois pilares principais:
      </p>

      <h2>Arquitetura Orientada a Eventos</h2>

      <p>
        A arquitetura orientada a eventos permite que o sistema reaja a
        acontecimentos específicos, onde um evento dispara outro, formando
        uma cadeia de execuções desacopladas.
      </p>

      <p>
        Nesse modelo, cada etapa do processamento atua de forma independente,
        facilitando a manutenção, a evolução do sistema e o isolamento de
        falhas, além de favorecer a observabilidade do fluxo como um todo.
      </p>

      <h2>Arquitetura Serverless</h2>

      <p>
        Em conjunto com o modelo orientado a eventos, a adoção de uma
        arquitetura serverless potencializa o desacoplamento e a eficiência
        no uso de recursos computacionais.
      </p>

      <p>
        Serviços como AWS Lambda permitem a execução de funções sob demanda,
        eliminando a necessidade de instâncias dedicadas, como EC2, para
        cenários de baixa ou média volumetria.
      </p>

      <p>
        Observando que o sistema realiza aproximadamente 1.000 chamadas por
        dia — o que representa, em média, uma requisição a cada dois minutos —
        o uso de funções serverless se mostra mais econômico, escalável e
        alinhado às boas práticas de arquitetura moderna em ambientes
        corporativos.
      </p>
    </Documentacao>
  );
}

export default arquiteturaDeSoftareIdeal;
