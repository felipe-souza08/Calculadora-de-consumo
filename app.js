(function (global) {
  'use strict';

  /**
   * Calcula os dados da viagem e combustível
   * @param {number} distance - km
   * @param {number} consumption - km/l
   * @param {number} price - R$/l
   * @param {number} speed - km/h
   */
  function calculateTrip(distance, consumption, price, speed) {
    const litersNeeded = distance / consumption;
    const totalCost = litersNeeded * price;
    const timeHours = distance / speed;

    return { litersNeeded, totalCost, timeHours };
  }

  function formatBR(value, decimals = 2) {
    if (!isFinite(value)) return '—';
    return Number(value).toFixed(decimals).replace('.', ',');
  }

  function formatTime(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}min`;
  }

  global.TripCalc = { calculateTrip, formatBR, formatTime };

})(window);