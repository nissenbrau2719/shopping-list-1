//add event listener to make new item div when item entered in form and "add item" button is clicked
$('#js-shopping-list-form').submit(function(event) {
  //stop default form submission
  event.preventDefault();
  //save input item
  const item = $(this).find('#shopping-list-entry').val();
  //create standard item div
  const itemDiv = 
    `<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
         <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`
  //add new div with that item
  $('ul.shopping-list').append(itemDiv);
  //clear input field
  $(this).find('#shopping-list-entry').val("");
});

//add event listener to toggle strikethrough item when "check" button is clicked

//add event listener to delete item's div when "delete" button is clicked
