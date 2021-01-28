import IntegerAdditionField from '../modules/IntegerAdditionField';

document.body.insertAdjacentHTML('afterbegin', '<div id="nested-root"></div>');
const nestedRoot = document.querySelector('#nested-root');

let nestedInstance, rootInstance;

describe('user interface', () => {
    test('adds two input fields of type "number"', () => {
        nestedInstance = new IntegerAdditionField(nestedRoot);
        const numberInputs = nestedRoot.querySelectorAll('input[type="number"]');
        expect(numberInputs.length).toEqual(2);
    });
    
    test('can be instantiated without arguments', () => {
        rootInstance = new IntegerAdditionField();
        const numberInputs = document.querySelectorAll('*:not(#nested-root) > input[type="number"]');
        expect(numberInputs.length).toEqual(2);
    });    
});

describe('application logic', () => {
    test('calculates the sum of both input fields correctly', () => {
        const [inputA, inputB] = nestedRoot.querySelectorAll('input[type="number"]');
        inputA.value = 5;
        inputA.dispatchEvent(new Event('change'));
        inputB.value = 7;
        inputB.dispatchEvent(new Event('change'));
        expect(nestedInstance.calculate()).toEqual(12);
    });

    test('accepts no floats', () => {
        const [inputA, inputB] = nestedRoot.querySelectorAll('input[type="number"]');
        inputA.value = 5.5;
        inputA.dispatchEvent(new Event('change'));
        inputB.value = 7.3;
        inputA.dispatchEvent(new Event('change'));
        expect(nestedInstance.calculate()).toBeNull();
    });
});