import { type ReclamacaoForm } from "./validators/CanalDaReclamacaoValidator";

export async function enviarReclamacao(
  dados: ReclamacaoForm,
  arquivo: File | null
): Promise<{
  mensagem: string;
  resultado: any;
}> {
  const formData = new FormData();


  formData.append("nome_completo", dados.nome_completo);
  formData.append("data_nascimento", dados.data_nascimento);
  formData.append("agencia_conta", dados.agencia_conta);
  formData.append("valor_envolvido", dados.valor_envolvido);
  formData.append("descricao_reclamacao", dados.descricao_reclamacao);
  formData.append("data_ocorrido", dados.data_ocorrido);
  formData.append("cpf_cnpj", dados.cpf_cnpj);

  if (arquivo) {
    formData.append("arquivo", arquivo);
  }

  const response = await fetch(
    "http://127.0.0.1:8000/api/reclamacoes",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const erro = await response.text();
    throw new Error(erro || "Erro ao enviar reclamação");
  }

  return response.json();
}
