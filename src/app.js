let randomNumber = Math.floor(Math.random() * 20) + 1;

const numberInput = document.querySelector('.number');
const formElement = document.querySelector('form');
const inputElement = document.querySelector('.input');
const againBtn = document.querySelector('.again');
const statusValue = document.querySelector('.statusValue');

// qish

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  let guessedNum = inputElement.value;

  if (guessedNum.length < 1) {
    alert('Please enter a number');
    return;
  }

  if (+guessedNum === randomNumber) {
    statusValue.textContent = 'Congratulations!!';

    numberInput.textContent = randomNumber;

    statusValue.classList.add('text-green-500');
    statusValue.classList.add('font-bold');
    statusValue.classList.add('text-3xl');
  } else {
    if (+guessedNum > randomNumber) {
      statusValue.textContent = 'Too high number, please try again later';
    } else if (+guessedNum < randomNumber) {
      statusValue.textContent = 'Too low number, please try again later';
    }
  }
});

againBtn.addEventListener('click', resetGame);

function resetGame() {
  // generate new number

  randomNumber = Math.floor(Math.random() * 20) + 1;

  // guessed number position with ?
  numberInput.textContent = '?';

  // clear input value
  inputElement.value = '';

  // clear status value

  statusValue.textContent = '';
}
