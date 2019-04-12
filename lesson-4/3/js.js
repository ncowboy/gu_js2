class FormValidator {
  constructor(formSelector) {
    this.formSelector = formSelector;
    this.rules = {
      name: /^[A-zА-яё]+$/i,
      phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
      email: /^[\w\.\-_]+@\w+\.\w{2,3}$/i
    };
    this.errors = {
      name: 'Имя содержит только буквы',
      phone: 'Телефон должен быть в формате +7(000)000-0000',
      email: 'Введите корректный email'
    };
    this.isValid = false;
    this._init();
  }

  _init() {
    const form = document.querySelector(this.formSelector);
    form.addEventListener('submit', e => {
      e.preventDefault();
      this._validateFields(form);
    });
  }

  _validateFields(formEl) {
    const fields = [...formEl.getElementsByTagName('INPUT')];
    fields.forEach(field => {
      if(this._validateField(field)) {
        field.parentElement.classList.remove('has-error');
        field.nextElementSibling.innerHTML = '';
        field.parentElement.classList.add('has-success');
      }else{
        field.parentElement.classList.remove('has-success');
        field.parentElement.classList.add('has-error');
        field.nextElementSibling.innerHTML = this.errors[field.name];
      }
    });
  }

  _validateField(field) {
    return this.rules[field.name].test(field.value);
  }

}

const formValidator = new FormValidator('#form');