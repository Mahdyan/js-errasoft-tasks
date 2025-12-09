const firstValueInput = document.getElementById('fist-value');
const secondValueInput = document.getElementById('second-value');
const addButton = document.getElementById('add-button');

const resultInput = document.getElementById('result-text');

addButton.addEventListener('click', () => {
    const firstValue = Number(firstValueInput.value);
    const secondValue = Number(secondValueInput.value);
    const result = firstValue + secondValue;
    console.log(result);
     resultInput.innerHTML +=` 
          ${result}`;
    
});