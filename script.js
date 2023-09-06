// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
if(dia){
  console.log('claro')
} else{
  console.log('de noite')
}
// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (let i = 1; i <= 20; i++) {
  if(i % 2 === 0){
    console.log(i)
  }
  
}
// 03 - crie uma função que exiba uma mensagem no console
function mensagem() {
  console.log('Curso vai na web');
}

mensagem();
// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome) {
  console.log(nome);
}

exibirNome('Flavio')
// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function gostosPessoais(nome, idade, estiloMusical){
  console.log(`${nome} ${idade} ${estiloMusical}`);
}

gostosPessoais('Flavio', 20, 'Rap')
// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function FilmeMusica(filme, musica){
  console.log(`${filme} ${musica}`);
}

FilmeMusica('Bastardos inglorios', 'Novo balanço')
// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triploDoNumero(numero){
  return numero * 3;
}

console.log(triploDoNumero(1))
// 08 - crie uma função que  verifique se uma  variável é true ou false
const falsa = false;
function verificaVariavel(variavel){
 if(typeof variavel === true) {
  console.log('A variavel é verdadeira')
 } else{
  console.log('A variavel é falsa')
 }
}
verificaVariavel(falsa)
// 09 - Crie um array que receba 5 itens e exiba no console.
const arrayDeItens = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
console.log(arrayDeItens)
// 10 - Utilize um método para adicionar um nome ao inicio do array.
arrayDeItens.unshift('item 0')

// 11 - Utilize um método para remover o último nome do array.
arrayDeItens.pop()

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
arrayDeItens.push('item 5', 'item 6')

// 13 - Utilize um método para remover o primeiro nome do array.
arrayDeItens.shift()

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();


// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
const sobreMim = {
  nome: 'Flavio',
  idade: 20,
  time: 'Santos'
}

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.filme = 'De volta pro futuro'
// 17 - Remova uma propriedade desse objeto.
delete sobreMim.filme;

// 18 - Mostre no console todas as propriedades desse objeto.
console.log(sobreMim)

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.
const cadastro = [
  {
    nome: 'Flavio',
    idade: 20,
    telefone: 444444,
    amigos: ['Miguel', 'Felipe', 'Lucas', 'Neymar'],
  },
  {
    nome: 'Luis',
    idade: 21,
    telefone: 444444,
    amigos: ['Carlos', 'Diogo', 'Lucas', 'Neymar'],
  },
  {
    nome: 'Felipe',
    idade: 21,
    telefone: 444444,
    amigos: ['Mirael', 'Fabio', 'nicolas', 'marcos'],
  },
  {
    nome: 'Neymar',
    idade: 21,
    telefone: 444444,
    amigos: ['Miguel', 'Felipe', 'Rian', 'Fabio'],
    },
  {
    nome: 'Lucas',
    idade: 21,
    telefone: 444444,
    amigos: ['Miguel', 'Felipe', 'Lucas', 'Fabricio', 'Carlos'],
  }
]

// 20 - Mostre no console o nome de um amigo de cada lista.
for (let i = 0; i < 5; i++) {
  console.log(cadastro[i].amigos[i])
}