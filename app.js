document.getElementById('calcular').addEventListener('click', () => {
  const tipo = document.querySelector('input[name="combustivel"]:checked').value;
  const consumo = parseFloat(document.getElementById('consumo').value);
  const velocidade = parseFloat(document.getElementById('velocidade').value);
  const tempo = parseFloat(document.getElementById('tempo').value);

  if (isNaN(consumo) || isNaN(velocidade) || isNaN(tempo)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const precoEtanol = 3.899;
  const precoGasolina = 5.999;

  const percurso = velocidade * tempo;
  const litros = percurso / consumo;

  let custo = 0;
  if (tipo === "etanol") {
    custo = litros * precoEtanol;
  } else {
    custo = litros * precoGasolina;
  }

  document.getElementById('resultado').innerHTML = `
    <p><strong>Distância percorrida:</strong> ${percurso.toFixed(1)} Km</p>
    <p><strong>Combustível gasto:</strong> ${litros.toFixed(1)} L</p>
    <p><strong>Custo total:</strong> ${custo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
  `;
});
