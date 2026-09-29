// 1 e 2. Criação das variáveis e atribuição de valores (com seus respectivos tipos)
const codigoCliente = 1054;         // Number
const nome = "Maria Silva";         // String
const endereco = "Rua das Flores";  // String (utilizado 'endereco' sem cedilha por boa prática)
const numero = 123;                 // Number
const bairro = "Centro";            // String
const cep = "50000-000";            // String (ideal para manter traços e zeros à esquerda)
const cadastroAtivo = true;         // Boolean

// 3. Função com nome descritivo que recebe codigoCliente como parâmetro
function verificarStatusCliente(codigoClienteParametro) {
    // Exemplo simples de uso do parâmetro
    if (codigoClienteParametro === codigoCliente) {
        console.log(`O cliente ${nome} mora no bairro ${bairro}.`);
        console.log(`Status do cadastro: ${cadastroAtivo ? "Ativo" : "Inativo"}`);
    } else {
        console.log("Código de cliente não encontrado.");
    }
}

// Testando a função
verificarStatusCliente(1054);