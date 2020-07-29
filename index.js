// function for adding new items to the list with "add item" button
$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newListItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">${newListItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `)
    });
});

// Add line-through to item with "check" buttom
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
   $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
 });

// Delete item with "delete" button
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});
