class Burger {
  constructor() {
    console.log(`Стоимость бургера: ${Burger.calculateSum()}`);
    console.log(`Количество калорий: ${Burger.calculateCalories()}`);
  }

  static calculateSum() {
    return Burger.calculateValue('price');
  }

  static calculateCalories() {
    return Burger.calculateValue('ccals');
  }

  static calculateValue(data) {
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
  let burger = new Burger();
});
