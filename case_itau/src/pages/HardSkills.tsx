import Documentacao from "../components/Documentacao";
import AlternadorIdealReal from "../components/AlternadorIdealReal";
import BancoDeDadosIdeal from "../components/BancoDeDadosIdeal";
import BancoDeDadosReal from "../components/BancoDeDadosReal";

function HardSkills() {
  return (
    <Documentacao
      titulo="5. Linguagens e Banco de Dados"
      subtitulo="Comparação entre decisões tecnológicas ideais e implementação real"
    >
      <p>
        A definição das linguagens de programação e das estratégias de
        persistência de dados é um fator determinante para a escalabilidade,
        manutenção e evolução do sistema.
      </p>

      <p>
        As escolhas apresentadas a seguir consideram tanto um cenário ideal,
        amplamente adotado em ambientes corporativos, quanto as decisões reais
        tomadas durante o desenvolvimento do projeto.
      </p>

      <h2>Linguagem de Programação</h2>

      <p>
        Para o backend, a linguagem adotada foi <strong>Python</strong>, devido à
        sua excelente compatibilidade com arquiteturas serverless,
        especialmente com o AWS Lambda.
      </p>

      <p>
        A linguagem apresenta inicialização rápida (cold start reduzido),
        ampla maturidade no ecossistema AWS e forte integração com serviços de
        processamento de texto e documentos.
      </p>

      <h2>Banco de Dados</h2>

      <AlternadorIdealReal
        ideal={<BancoDeDadosIdeal />}
        real={<BancoDeDadosReal />}
      />
    </Documentacao>
  );
}

export default HardSkills;
