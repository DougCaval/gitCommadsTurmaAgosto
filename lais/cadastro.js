// Criação das variáveis e atribuição de valores adequados aos tipos de dados
let codigocliente = 1054;               // Number
let nome = "Ana Clara Silva";           // String
let endereco = "Rua das Laranjeiras";   // String (sem acento para seguir boas práticas)
let numero = 250;                       // Number
let bairro = "Boa Viagem";              // String
let cep = "51020-000";                  // String (usando string para manter o formato com traço)
let cadastroAtivo = true;               // Boolean

// Função que recebe o codigoCliente como parâmetro
function verificarCadastroCliente(codigoClienteBuscado) {}
    console.log(`Buscando informações para o cliente de código: ${codigoClienteBuscado}...`);
    
    // Verifica se o código passado é igual ao do cliente que temos salvo
    if (codigoClienteBuscado === codigocliente) {
        console.log("--- Cliente Encontrado ---");
        console.log(`Nome: ${nome}`);
        console.log(`Endereço: ${endereco}, ${numero} - ${bairro}`);
        console.log(`CEP: ${cep}`);
        console.log(`Status: ${cadastroAtivo ? "Ativo" : "Inativo"}`);}