export const createOddBlock = (placeholder) => (
   `<div class="calculator__odd-item calculator__multiply-odd-item">
      <div class="calculator__odd-wrap">
         <input type="number" name="stake" class="input calculator__input" placeholder="Enter stake">
      </div>
      <div class="calculator__odd-wrap">
         <input type="text" name="odd" class="input calculator__input" placeholder="${placeholder}">
      </div>
   </div>`
);