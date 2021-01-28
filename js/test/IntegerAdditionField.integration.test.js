import plus from '../modules/Plus';
import IntegerAdditionField from '../modules/IntegerAdditionField';

jest.mock('../modules/Plus');

const instance = new IntegerAdditionField();

test('uses plus library', () => {
    const [inputA, inputB] = document.querySelectorAll('input[type="number"]');
    inputA.value = 1;
    inputA.dispatchEvent(new Event('change'));
    inputB.value = 2;
    inputB.dispatchEvent(new Event('change'));
    instance.calculate();
    expect(plus).toHaveBeenCalled();
});