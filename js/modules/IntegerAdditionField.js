import plus from './Plus.js';

export default class IntegerAdditionField {
    constructor(parentElement) {
        this.parentElement = parentElement || document.querySelector('body');
        this.aInput = document.createElement('input');
        this.bInput = document.createElement('input');

        this._a = this.aInput.value;
        this._b = this.bInput.value;

        this._initInputs();
        this._render();
    }

    _initInputs() {
        this.aInput.setAttribute('type', 'number');
        this.bInput.setAttribute('type', 'number');
        this.aInput.addEventListener('change', (event) => this._a = parseFloat(event.target.value));
        this.bInput.addEventListener('change', (event) => this._b = parseFloat(event.target.value));
    }

    _render() {
        this.parentElement.appendChild(this.aInput);
        this.parentElement.appendChild(this.bInput);
    }

    calculate() {
        // TODO: remove typechecks
        if (
            !this._a
            || !this._b
            || !Number.isInteger(this._a)
            || !Number.isInteger(this._b)
        ) {
            return null;
        }

        // TODO: use builtin + instead of library function
        return plus(this._a, this._b);
    }
}