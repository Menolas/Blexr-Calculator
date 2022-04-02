export const calculatorModalView = (icon, selectOptions, placeholder) => (
   `<div id="modal" class="modal">
      <article id="calculator" class="calculator">
         <header class="calculator__header modal__header">
            <div class="calculator__icon">${icon}</div>
            <h4>
               Enter the Stake and Odds for your bet and the Bet Calculator will automatically calculate the Payout. Add Odds for Multiples.
            </h4>
            <button id="modal_close" class="btn modal__close-btn"><span></span></button>
         </header>
         <div class="calculator__body">
            <div class="calculator__inner-wrap">
               <label for="result" class="label calculator__label">Payout</label>
               <input type="text" id="result"class="input calculator__output" placeholder="$ 0.00" readonly>
            </div>
            <div class="calculator__inner-wrap calculator__inner-wrap--select">
               <label for="odds_format" class="label calculator__label">Selected Odds Format</label>
               <select id="odds_format" name="odds_format">${selectOptions}</select>
            </div>
            <div id="calculator-odds-container" class="calculator__inner-wrap calculator__odds-container"></div>
            <div class="calculator__inner-wrap calculator__btn-wrap">
               <button id="add_oods" class="btn calculator__btn calculator__add-btn"><span class="calculator__btn-icon"></span>Add odds</button>
               <button id="clear" class="btn calculator__btn calculator__clear-btn"><span class="calculator__btn-icon"></span>Clear</button>
            </div>
         </div>
      </article>
   </div>`
);
