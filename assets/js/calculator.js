import '../scss/style.scss';
import { HOUSE_ICON, oddsFormat, oddInputPlaceholders } from './const.js';
import { createElement } from './utils.js';
import { calculatorBtnView } from './calculator-btn-view.js';
import { calculatorModalView } from './calculator-modal-view.js';
import { formatOptions } from './format-options-view.js';
import { defaultOddBlockView } from './default-odd-block';
import { createOddBlock } from './create-odd-block.view.js';
const body = document.querySelector('body');

// creating calculator button
const calculatorInitiateBtn = createElement(calculatorBtnView(HOUSE_ICON()));

//incerting calculator button into the body tag on the page
body.append(calculatorInitiateBtn);

// function for calculating odds in different formats
const getResult = (array) => {
   let result = 0;
   let currentFormat = document.querySelector('select[name="odds_format"]').value;
   Array.from(array).forEach((item) => {
      let odd = item.querySelector('input[name="odd"]').value;
      let stake = Number(item.querySelector('input[name="stake"]').value);
      switch (currentFormat) {
         case oddsFormat.AMERICAN:
            odd = (Number(odd) + 100) / 100;
            console.log(odd);
            result += stake * odd;
            break;
         case oddsFormat.FRACTAL:
            odd = eval(odd);
            console.log(odd);
            result += stake * odd;
            break;
         case oddsFormat.DECIMAL:
            result += stake * odd;
            break;
      }
   });

   return result.toFixed(2);
};

// function for cleaning inputs values and removing created additional odds blocks
const clearInputs = (input) => {
   let oddItems = document.querySelectorAll('.calculator__odd-item');
   oddItems.forEach((item) => item.remove());
   input.value = '';
}

// callback for calling calculation function on the input change event
const inputChangeHandler = (inputs, odds, output) => {
   Array.from(inputs).forEach((item) => item.addEventListener('change', function () {
      let result = getResult(odds);
      if (!isNaN(result)) {
         output.value = '$ ' + result;
      }
   }));
};

// showing calculator modal
const showModal = () => {

   // removing calculator initiation button
   body.removeChild(calculatorInitiateBtn);

   const modalWindow = createElement(calculatorModalView(HOUSE_ICON(), formatOptions(oddsFormat)));

   // pushing calculator modal into the body tag on the page
   body.append(modalWindow);
   body.classList.add('overlay');

   const modalCloseBtn = modalWindow.querySelector('#modal_close');
   const addOddBtn = modalWindow.querySelector('#add_oods');
   const oddsContainer = modalWindow.querySelector('#calculator-odds-container');
   const clearBtn = modalWindow.querySelector('#clear');
   const outputInput = modalWindow.querySelector('#result');
   let currentOddsFormat = modalWindow.querySelector('select[name="odds_format"]');

   // creating and pushing into the modal default odd inputs
   oddsContainer.append(createElement(defaultOddBlockView(oddInputPlaceholders[currentOddsFormat.value])));

   let calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
   let oddItems = modalWindow.querySelectorAll('.calculator__odd-item');

   // event listener for changes in inputs
   inputChangeHandler(calculatorInputs, oddItems, outputInput);

   // event listener for adding additional odd block
   addOddBtn.addEventListener('click', function () {
      oddsContainer.append(createElement(createOddBlock(oddInputPlaceholders[currentOddsFormat.value])));
      calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
      oddItems = oddsContainer.querySelectorAll('.calculator__odd-item');
      inputChangeHandler(calculatorInputs, oddItems, outputInput);
      let currentStakeInputIndex = Array.from(oddItems).length - 1;
      oddItems[currentStakeInputIndex].querySelector('input[name="stake"]').focus();
   });

   // event listener for clear button
   clearBtn.addEventListener('click', function () {
      clearInputs(outputInput);
      oddsContainer.append(createElement(defaultOddBlockView(oddInputPlaceholders[currentOddsFormat.value])));
      oddItems = modalWindow.querySelectorAll('.calculator__odd-item');
      calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
      inputChangeHandler(calculatorInputs, oddItems, outputInput);
   });

   // even listener for changing odd format in select
   currentOddsFormat.addEventListener('change', function () {
      clearInputs(outputInput);
      oddsContainer.append(createElement(defaultOddBlockView(oddInputPlaceholders[currentOddsFormat.value])));
      oddItems = modalWindow.querySelectorAll('.calculator__odd-item');
      calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
      inputChangeHandler(calculatorInputs, oddItems, outputInput);
   });

   // function for closing calculator modal
   const closeModal = () => {
      body.removeChild(modalWindow);
      body.classList.remove('overlay');
      document.removeEventListener('keydown', escEvent);
      body.append(calculatorInitiateBtn);
   };

   // event listener on the modal close button
   modalCloseBtn.addEventListener('click', function () {
      clearInputs(outputInput);
      closeModal();
   });

   // callback function for click on escape button
   const escEvent = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
         closeModal();
      }
   };

   // event listener for click on escape button
   document.addEventListener('keydown', escEvent);
}

// initiationof calculator
if (calculatorInitiateBtn) {
   calculatorInitiateBtn.addEventListener('click', showModal);
}
