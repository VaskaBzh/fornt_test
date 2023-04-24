const updateItem = () => {
  $('.item_text').on('blur', function() {
    const item = $(this).closest('.item');
    const index = $('.item').index(item);
    const newText = $(this).text();
    $.ajax({
      url: 'edit_item.php',
      type: 'POST',
      data: {index: index, newText: newText},
      success: function() {
        // Что-то после редактирования
      }
    });
  });

  $('.item_text').on('keydown', function(event) {
    if (event.keyCode === 13) {
      $(this).blur();
    } else if (event.keyCode === 27) {
      $(this).text($(this).data('original-text'));
      $(this).blur();
    }
  });

  $('.item_text').on('focus', function() {
    $(this).data('original-text', $(this).text());
  });
}

export default updateItem;