document.addEventListener('DOMContentLoaded', () => {
  const fuelType = document.getElementById('fuelType');
  const fuelPrice = document.getElementById('fuelPrice');
  const consumption = document.getElementById('consumption');
  const speed = document.getElementById('speed');
  const distance = document.getElementById('distance');
  const calculateBtn = document.getElementById('calculateBtn');
  const clearBtn = document.getElementById('clearBtn');

  const resultSection = document.getElementById('resultSection');
  const resultText = document.getElementById('resultText');
  const resultDetails = document.getElementById('resultDetails');

  // preços automáticos padrão
  const defaultPrices = {
    gasolina: 5.99,
    etanol: 4.49
  };

  fuelType.addEventListener('change', () => {
    fuelPrice.value = defaultPrices[fuelType.value].toFixed(2);
  });

  calculateBtn.addEventListener('click', () => {
    const tipo = fuelType.value;
    const price = parseFloat(fuelPrice.value);
    const cons = parseFloat(consumption.value);
    const spd = parseFloat(speed.value);
    const dist = parseFloat(distance.value);

    if ([price, cons, spd, dist].some(v => isNaN(v) || v <= 0)) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    const result = TripCalc.calculateTrip(dist, cons, price, spd);

    resultSection.hidden = false;
    resultText.textContent = `Você gastará R$ ${TripCalc.formatBR(result.totalCost)} com ${tipo}.`;

    resultDetails.innerHTML = `
      <li>Distância total: ${TripCalc.formatBR(dist, 1)} km</li>
      <li>Litros necessários: ${TripCalc.formatBR(result.litersNeeded, 2)} L</li>
      <li>Tempo total da viagem: ${TripCalc.formatTime(result.timeHours)}</li>
      <li>Velocidade média: ${TripCalc.formatBR(spd, 0)} km/h</li>
      <li>Combustível: ${tipo}</li>
    `;

    console.group(`%cCálculo de Viagem (${tipo.toUpperCase()})`, 'color:white; background:#4b2bd3; padding:4px 8px; border-radius:4px');
    console.log(`Distância total: ${dist} km`);
    console.log(`Consumo médio: ${cons} km/l`);
    console.log(`Preço combustível: R$ ${price.toFixed(2)}`);
    console.log(`Velocidade média: ${spd} km/h`);
    console.log(`Tempo total: ${TripCalc.formatTime(result.timeHours)}`);
    console.log(`Litros necessários: ${result.litersNeeded.toFixed(2)} L`);
    console.log(`Custo total: R$ ${result.totalCost.toFixed(2)}`);
    console.groupEnd();
  });

  clearBtn.addEventListener('click', () => {
    fuelType.value = 'gasolina';
    fuelPrice.value = defaultPrices.gasolina.toFixed(2);
    consumption.value = 10;
    speed.value = 80;
    distance.value = 100;
    resultSection.hidden = true;
    resultText.textContent = '';
    resultDetails.innerHTML = '';
    console.clear();
  });
});