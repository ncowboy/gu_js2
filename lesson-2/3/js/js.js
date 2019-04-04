class Burger {
  constructor() {
    this.init();
  }

  init() {
    console.log(`Стоимость бургера: ${this.calculateSum()}`);
    console.log(`Количество калорий: ${this.calculateCalories()}`);
  }

  calculateSum() {
    return this.calculateValue('price');
  }

  calculateCalories() {
    return this.calculateValue('ccals');
  }

  calculateValue(data) {
    let result = 0;
    const spice = document.getElementById('spice');
    const mayo = document.getElementById('mayo');

    result += +document.getElementById('size').selectedOptions[0].dataset[data];
    result += +document.getElementById('topping').selectedOptions[0].dataset[data];
    result += spice.checked ? +spice.dataset[data] : 0;
    result += mayo.checked ? +mayo.dataset[data] : 0;

    return result;
  }
}

document.getElementById('calc').addEventListener('click', (event) => {
  event.preventDefault();
  new Burger();
});
