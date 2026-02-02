import Documentacao from "../components/Documentacao";
import AlternadorIdealReal from "../components/AlternadorIdealReal";
import ArquiteturaDeSoftwareIdeal from "../components/ArquiteturaDeSoftareIdeal";
import ArquiteturaDeSoftwareReal from "../components/ArquiteturaDeSoftareReal";

function ArquiteturaDeSoftware() {
  return (
    <Documentacao
      titulo="3. Arquitetura de Software"
      subtitulo="Comparação entre a arquitetura idealizada e a arquitetura efetivamente implementada"
    >
      <p>
        A arquitetura de software apresentada a seguir é analisada sob duas
        perspectivas complementares: a arquitetura idealizada, concebida a
        partir de boas práticas amplamente adotadas no mercado, e a
        arquitetura real, efetivamente utilizada no desenvolvimento deste
        projeto.
      </p>

      <p>
        Essa comparação permite evidenciar decisões técnicas, restrições
        práticas e a aplicação consciente de conceitos arquiteturais no
        contexto de um desafio real.
      </p>

      <AlternadorIdealReal
        ideal={<ArquiteturaDeSoftwareIdeal />}
        real={<ArquiteturaDeSoftwareReal />}
      />
    </Documentacao>
  );
}

export default ArquiteturaDeSoftware;
