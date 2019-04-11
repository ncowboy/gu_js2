class QuotesSwitcher {
  constructor(blockClass, buttonClass, regexp, newQuote) {
    this.blockClass = blockClass;
    this.buttonClass = buttonClass;
    this.regexp = regexp;
    this.newQuote = newQuote;
    this.init();
  }
  init() {
    document.getElementById('buttons').addEventListener('click', (e) =>{
      if(e.target.classList[1] === this.buttonClass) {
        this.replace();
      }
    });
  }

  replace(){
    const block = document.querySelector(`.${this.blockClass}`);
    block.innerHTML = block.innerHTML.replace(this.regexp, this.newQuote);
  }
}
const switch1 = new QuotesSwitcher('big-text', 'btn-success', /'/g, '"');
const switch2 = new QuotesSwitcher('big-text', 'btn-primary', /(\B')|('\B)/g, '"');