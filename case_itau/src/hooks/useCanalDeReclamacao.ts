import { useForm, type Resolver } from "react-hook-form";
import { useState } from "react";
import {
  validarReclamacao,
  type ReclamacaoForm,
} from "../validators/CanalDaReclamacaoValidator";
import { enviarReclamacao } from "../services/serviceSubmit";

const resolver: Resolver<ReclamacaoForm> = async (values) => {
  const resultado = validarReclamacao(values);

  if (resultado.valido) {
    return { values, errors: {} };
  }

  const errors = Object.entries(resultado.erros).reduce(
    (acc, [field, message]) => {
      acc[field as keyof ReclamacaoForm] = {
        type: "manual",
        message,
      };
      return acc;
    },
    {} as Record<keyof ReclamacaoForm, any>
  );

  return { values: {}, errors };
};

export function useCanalDeReclamacao() {
  const [respostaBack, setRespostaBack] = useState<any>(null);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setValue,
    trigger, // <--- Adicionado Trigger
  } = useForm<ReclamacaoForm>({
    mode: "onChange", // <--- Mudado para onChange para validar enquanto digita
    reValidateMode: "onChange",
    resolver,
    defaultValues: {
      nome_completo: "",
      tipo_documento: "CPF",
      data_nascimento: "",
      agencia_conta: "",
      valor_envolvido: "",
      descricao_reclamacao: "",
      data_ocorrido: new Date().toISOString().split('T')[0], // Valor padrão para evitar erro de campo vazio
      possuiArquivo: false,
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setArquivoSelecionado(file);
    setValue("possuiArquivo", !!file, { shouldValidate: true });
    await trigger("possuiArquivo"); // <--- Trigger aqui
  };

  const handleRemoveFile = async (inputRef: React.RefObject<HTMLInputElement | null>) => {
    setArquivoSelecionado(null);
    setValue("possuiArquivo", false, { shouldValidate: true });
    if (inputRef.current) inputRef.current.value = "";
    await trigger("possuiArquivo"); // <--- Trigger aqui
  };

  async function onSubmit(dados: ReclamacaoForm) {
    const resposta = await enviarReclamacao(dados, arquivoSelecionado);
    setRespostaBack(resposta);
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    watch,
    errors,
    isValid,
    isSubmitting,
    possuiArquivo: !!arquivoSelecionado,
    nomeArquivo: arquivoSelecionado?.name ?? null,
    handleFileChange,
    handleRemoveFile,
    respostaBack,
  };
}