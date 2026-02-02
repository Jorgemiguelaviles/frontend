export type ReclamacaoForm = {
  nome_completo: string;
  data_nascimento: string;
  agencia_conta: string;
  valor_envolvido: string;
  descricao_reclamacao: string;
  data_ocorrido: string;
  possuiArquivo: boolean; 
  cpf_cnpj: string; 
  tipo_documento: "CPF" | "CNPJ";
};

export type ValidationResult = {
  valido: boolean;
  erros: Record<string, string>;
};

function isDataValida(data: string): boolean {
  if (!data) return false;
  const d = new Date(data);
  return !isNaN(d.getTime());
}

function calcularIdade(dataNascimento: string): number {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();

  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

function validarCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  const calcularDigito = (base: string): number => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) soma += Number(base[i]) * (base.length + 1 - i);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const digito1 = calcularDigito(cpf.substring(0, 9));
  const digito2 = calcularDigito(cpf.substring(0, 9) + digito1);
  return digito1 === Number(cpf[9]) && digito2 === Number(cpf[10]);
}

function validarCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/\D/g, "");
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  const calcularDigito = (base: string, pesos: number[]): number => {
    let soma = 0;
    for (let i = 0; i < pesos.length; i++) soma += Number(base[i]) * pesos[i];
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const digito1 = calcularDigito(cnpj.substring(0, 12), pesos1);
  const digito2 = calcularDigito(cnpj.substring(0, 12) + digito1, pesos2);
  return digito1 === Number(cnpj[12]) && digito2 === Number(cnpj[13]);
}

export function validarReclamacao(dados: ReclamacaoForm): ValidationResult {
  const erros: Record<string, string> = {};

  // Nome completo
  if (!dados.nome_completo || dados.nome_completo.trim().length < 3) {
    erros.nome_completo = "Informe seu nome completo";
  }

  // CPF/CNPJ OBRIGATÓRIO
  if (!dados.cpf_cnpj || dados.cpf_cnpj.trim() === "") {
    erros.cpf_cnpj = `O ${dados.tipo_documento} é obrigatório`;
  } else {
    const valido = dados.tipo_documento === "CPF" ? validarCPF(dados.cpf_cnpj) : validarCNPJ(dados.cpf_cnpj);
    if (!valido) {
      erros.cpf_cnpj = `${dados.tipo_documento} inválido`;
    }
  }

  // Data de nascimento e Maioridade
  if (!dados.data_nascimento || !isDataValida(dados.data_nascimento)) {
    erros.data_nascimento = "Data de nascimento obrigatória";
  } else if (calcularIdade(dados.data_nascimento) < 18) {
    erros.data_nascimento = "Você deve ser maior de idade (18+)";
  }

  // Data do ocorrido
  if (!dados.data_ocorrido || !isDataValida(dados.data_ocorrido)) {
    erros.data_ocorrido = "Data do ocorrido obrigatória";
  }

  // Agência/Conta
  const contaLimpa = dados.agencia_conta?.replace(/\D/g, "") || "";
  if (contaLimpa.length !== 9) {
    erros.agencia_conta = "Agência/Conta deve ter 9 dígitos numéricos";
  }

  // Lógica Descrição OU Arquivo
  const temDescricao = dados.descricao_reclamacao?.trim().length > 0;
  if (!temDescricao && !dados.possuiArquivo) {
    erros.descricao_reclamacao = "Descreva o problema ou anexe um documento";
  }

  return {
    valido: Object.keys(erros).length === 0,
    erros,
  };
}