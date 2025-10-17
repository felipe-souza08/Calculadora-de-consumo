const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
};

const elemento = {
  formulario: document.querySelector("form"),
  paragrafo: document.querySelector("p"),
};

const veiculo = {
  modelo: "Argo",
  consumoMedio: 8.5,
};

const viagem = {
  velocidadeMedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

const combustivel = {
  tipo: "",
  precoEtanol: 3.899,
  precoGasolina: 5.999,
};

input.combustivel.forEach((radio) => {
  radio.addEventListener("change", () => {
    combustivel.tipo = radio.value;
  });
});

elemento.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;

  console.log(viagem.duracao, viagem.velocidadeMedia);
});

function calcularConsumo() {

  // VARIAVEIS PARA CAPTURAR P VALOR DA HORA E MINUTO

  viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;

  // CAPTURA O VALOR DO CONSUMO MÉDIO
  veiculo.consumoMedio = input.consumo.value

  console.log(veiculo.consumoMedio)

  // METODO (SLICE) PARA CORTAR O SÍMBOLO DE "." DA HORA E MINUTO, SEPARANDO EM VARIAVEIS
  let hora = +viagem.duracao.slice(0, 2);
  let minuto = Number(viagem.duracao.slice(3));

  // FÓRMULA PARA CALCULAR A DISTÃNCIA PERCORRIDA PELO USUÁRIO
   viagem.percurso = (viagem.velocidadeMedia * ((hora *60 + minuto)/60)).toFixed(1)

  //MÉTODO (REPLACE) PARA SUBSTITUIR "." POR "," NA EXIBIÇÃO DA DISTANCIA TOTAL
  console.log(viagem.percurso.replace('.',',') + ' KM')

  // CALCULO DO CONSUMO EM LITROS GASTOS EM VIAGEM
viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio

console.log(viagem.consumoLitros)

// CALCULO PARA SABER O CUSTO EM REAIS DE ACORDO COM O CONSUMO EM LITROS 

if(combustivel.tipo.toLowerCase() === 'etanol'){ 
  viagem.custoEmReais = viagem.consumoLitros * combustivel.precoEtanol
  console.log('Custo do Etanol: ${viagem.custoEmReais}')
} else {
viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina
// METODO PARA FORMATAR O RESULTADO COMO MOEDA (R$)
console.log {Custo da Gasolina:${viagem.custoEmReais.tocaleString('pt-BR')},
style: 'currency',
currency: 'BRL'  
})}')
