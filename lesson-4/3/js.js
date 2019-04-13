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
            this._validateFields(form);
            if (!this.isValid) {
                e.preventDefault();
            }
        });
    }

    _validateFields(formEl) {
        const fields = [...formEl.getElementsByTagName('INPUT')];
        fields.forEach(field => {
            this._watchField(field);
            if (this._validateField(field)) {
                FormValidator._handleSuccess(field);
                this.isValid = true;
            } else {
                this._handleError(field);
                this.isValid = false;
            }
        });
    }

    _validateField(field) {
        return this.rules[field.name].test(field.value);
    }

    static _handleSuccess(field) {
        field.parentElement.classList.remove('has-error');
        field.nextElementSibling.innerHTML = '';
        field.parentElement.classList.add('has-success');
    }

    _handleError(field) {
        field.parentElement.classList.remove('has-success');
        field.parentElement.classList.add('has-error');
        field.nextElementSibling.innerHTML = this.errors[field.name];
    }

    _watchField(field) {
        field.addEventListener('input', () => {
            if (this._validateField(field)) {
                FormValidator._handleSuccess(field);
            } else {
                this._handleError(field);
            }
        });
    }

}

const formValidator = new FormValidator('#form');