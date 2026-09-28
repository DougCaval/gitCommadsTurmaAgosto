const codigocliente = 1001;
const nome = "Mariana Souza";
const endereço = "Rua das Flores";
const numero = 250;
const bairro = "Centro";
const cep = "38400-123";
const cadastroAtivo = true;

function buscarCadastro(codigoCliente) {
  if (codigoCliente === codigocliente) {
    return {
      codigocliente,
      nome,
      endereço,
      numero,
      bairro,
      cep,
      cadastroAtivo,
    };
  }

  return null;
}