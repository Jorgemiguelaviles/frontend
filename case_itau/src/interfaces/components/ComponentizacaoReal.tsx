import Documentacao from "./Documentacao";
import caminhoImagem from '../../assets/infraestrtura/imagem_estrutura.png'

function ComponentizacaoReal() {
  return (
    <Documentacao
      titulo="4. Componentização e Estrutura de Diretórios"
      subtitulo="Importância e função de cada camada na arquitetura do projeto"
    >
      <p>
        Para manter a manutenibilidade, escalabilidade e clareza do projeto, 
        a organização em diretórios é essencial. Cada camada cumpre um papel 
        específico:
      </p>

      <ul>
        <li>
          <strong>domain/</strong>: Contém entidades, serviços e value objects. 
          Representa o núcleo da lógica de negócio, independente de infraestrutura.
        </li>
        <li>
          <strong>application/</strong>: Possui use cases e DTOs. Orquestra 
          regras do domínio e coordena operações entre domínio e infraestrutura.
        </li>
        <li>
          <strong>infrastructure/</strong>: Gerencia como os dados entram e saem 
          do sistema, incluindo persistência, GUI e extração de dados.
        </li>
        <li>
          <strong>interfaces/</strong>: Porta de entrada do sistema, CLI ou APIs, 
          que interage com o usuário ou com outros sistemas.
        </li>
      </ul>

      <p>
        Essa separação garante que cada camada possa evoluir de forma independente, 
        reduzindo acoplamento e facilitando testes e manutenção.
      </p>

      <p>
        Abaixo, um espaço reservado para imagens que ilustram a arquitetura ou fluxo de dados:
      </p>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img 
          src={caminhoImagem} 
          alt="Estrutura de Diretórios" 
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }} 
        />
      </div>
    </Documentacao>
  );
}

export default ComponentizacaoReal;
