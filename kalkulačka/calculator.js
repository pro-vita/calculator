const inputBtn = document.getElementsByTagName('input');
const displayInput = document.querySelector('.displayInput');
Array.from(inputBtn).forEach(inputBtn => {
    inputBtn.addEventListener('click', () => {
        if (inputBtn.value === 'C') {
            return displayInput.value = '';
        } else if (inputBtn.value === '=') {
            return displayInput.value = eval(displayInput.value);
        } else if (inputBtn.value === 'x') {
            displayInput.value += '*';
        } else if (inputBtn.value === '√x') {  // Use the actual character '√' in HTML
            displayInput.value = Math.sqrt(parseFloat(displayInput.value));
          } else if (inputBtn.value === 'x²') {  // Use the actual characters 'x²' in HTML
                const inputValue = displayInput.value.trim();
                if (/^\d+(\.\d+)?$/.test(inputValue)) {
                  displayInput.value = inputValue + '²';
                  displayInput.value = Math.pow(parseFloat(displayInput.value), 2);
                }
              } else {
                if (/[\d\/\*\-\+\.\(]$/.test(inputBtn.value)) {
                  displayInput.value += inputBtn.value;
                }
              }
     });
});





