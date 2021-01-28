import IntegerAdditionField from './modules/IntegerAdditionField.js';

const additionFieldRoot = document.querySelector('#addition-field');
const addition = new IntegerAdditionField(additionFieldRoot);

const calculateButton = document.querySelector('#calculate-button');
const resultField = document.querySelector('#result-field');
calculateButton.addEventListener('click', () => {
    const result = addition.calculate();
    if (!result) {
        alert('Error!');
        return;
    }
    resultField.textContent = result;
});
