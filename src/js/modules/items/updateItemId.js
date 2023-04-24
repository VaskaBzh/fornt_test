export function updateItemId(index) {
  $('.item').each(function() {
    $(this).find('.item.id').text(index + 1);
  });
}