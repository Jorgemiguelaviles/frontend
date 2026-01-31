import Documentacao from "../components/Documentacao";

function Ia() {
  return (
    <Documentacao
      titulo="6. Uso de Inteligência Artificial no Projeto"
      subtitulo="Possibilidades de aplicação de IA e automação em um cenário ideal"
    >
      <p>
        No contexto de um cenário ideal, este projeto poderia se beneficiar do
        uso de diversas ferramentas da AWS que já possuem integração nativa com
        Inteligência Artificial e Machine Learning, como o Amazon Textract e o
        Amazon Comprehend.
      </p>

      <p>
        Essas soluções poderiam ser utilizadas para apoiar fluxos de extração,
        interpretação e classificação de dados textuais, reduzindo esforço
        manual e aumentando a eficiência das análises. No entanto, é importante
        destacar que tais recursos não foram implementados diretamente neste
        projeto, sendo apresentados como possibilidades de evolução.
      </p>

      <h2>IA como Apoio ao Desenvolvimento de Software</h2>

      <p>
        Além das ferramentas voltadas ao processamento de dados, também é
        possível considerar o uso de inteligências artificiais aplicadas ao
        desenvolvimento de software, como o Devin — tecnologia que o Itaú vem
        explorando internamente.
      </p>

      <p>
        Em um cenário ideal, esse tipo de IA poderia atuar como um copiloto de
        engenharia, auxiliando na geração de código a partir de prompts bem
        definidos, com entregas padronizadas, prontas para build e acompanhadas
        de testes unitários com alta cobertura.
      </p>

      <h2>Automação de Fluxos e Orquestração</h2>

      <p>
        Para facilitar a criação, validação e build dos códigos, poderiam ser
        utilizadas ferramentas como o StackSpot e o AWS CodePipeline,
        permitindo a definição de sequências de execução automatizadas e
        padronizadas.
      </p>

      <p>
        Adicionalmente, o uso do AWS Step Functions possibilitaria a
        orquestração de eventos, facilitando a execução de um fluxo após o
        outro, de forma controlada, observável e desacoplada — reforçando o
        modelo de arquitetura orientada a eventos adotado pelo projeto.
      </p>

      <h2>Possíveis Evoluções com Interfaces Inteligentes</h2>

      <p>
        Como melhoria futura, o Amazon Lex poderia ser utilizado para a criação
        de um chatbot inteligente, capaz de auxiliar usuários na compreensão
        do sistema e no direcionamento de suas demandas.
      </p>

      <p>
        Esse chatbot poderia considerar interações anteriores do usuário para
        oferecer respostas mais contextualizadas, sugerir soluções possíveis e
        até mesmo auxiliar o próprio usuário a se localizar dentro do sistema,
        tornando a experiência mais intuitiva e eficiente.
      </p>

      <p>
        Dessa forma, a Inteligência Artificial é apresentada não como um
        requisito obrigatório do projeto, mas como um conjunto de possibilidades
        futuras que podem ampliar a automação, a escalabilidade e a usabilidade
        da solução.
      </p>
    </Documentacao>
  );
}

export default Ia;
