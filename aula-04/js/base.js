//JS é case sensitive
//ponto e virgula não é obrigatório (;)
//console do browser

console.log('Olá, usando o console');
console.log('outra mensagem');

//variáveis
//não existem tipos na declaração de variavel
//JS possui tipagem automática, conforme valor é atibuído

//para criar variáveis se utiliza let ou const
// var NÃO USAR

let nomeUsuario = 'Fernando Wieser';
let idUsuário = 456789;
let = logado = true;
const DATA_NASCIMENTO = "15/07";

console.log(nomeUsuario, typeof nomeUsuario);
console.log(idUsuário, typeof idUsuário);
console.log(logado, typeof logado);
console.log(DATA_NASCIMENTO, typeof DATA_NASCIMENTO);

//concatenação NÃO USAR
console.log("Nome: " + nomeUsuario + " logado" + logado);


//Template String
//Iniciar e terminar com sinal de crase ``
//placeholder ${variavel, método, função, objeto...}

console.log(`Nome: ${nomeUsuario} - id: ${idUsuário} - ${40 * 40} ${Math.ceil(Math.random()*100)}`);

let primeiroNumero = 10;
let segundoNumero = '10';


console.log(`${primeiroNumero} == ${segundoNumero} : ${primeiroNumero == segundoNumero}`);
console.log(`${primeiroNumero} === ${segundoNumero} : ${primeiroNumero === segundoNumero}`);

//Arrays

const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);
console.table(pessoas);


//Inserindo no primeiro índice
pessoas.unshift('Eu mesmo');
console.table(pessoas);

//excluir o valor do primeiro índice
pessoas.shift();
console.table(pessoas);

//inserir no último índice
pessoas.push('Eu mesmo');
console.table(pessoas);

//excluir o valor do último índice
pessoas.pop();
console.table(pessoas);

//excluindo em qualquer parte do array
pessoas.splice(2, 2);
console.table(pessoas);

//incluir em qualquer parte do array
pessoas.splice(2, 0, 'Nós', 'Eles', 9876, true, 456789, 'Eu mesmo');
console.table(pessoas);
