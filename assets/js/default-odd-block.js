export const defaultOddBlockView = (placeholder) => (
   `<div class="calculator__odd-item">
      <div class="calculator__odd-wrap">
         <label for="stake" class="label calculator__label">Stake</label>
         <input id="stake" type="number" name="stake" class="input calculator__input" placeholder="Enter stake">
      </div>
      <div class="calculator__odd-wrap">
         <label for="odd" class="label calculator__label">Odds</label>
         <input id="odd" type="text" name="odd" class="input calculator__input" placeholder="${placeholder}">
      </div>
   </div>`
);
