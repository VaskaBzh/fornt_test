import { updateItemId } from "./updateItemId.js";

const moveItem = () => {
  $('[data-direction]').click(function() {
    const direction = $(this).data('direction');
    const item = $(this).closest('.item');
    const index = $('.item').index(item);
    const newIndex = direction === 'up' ? index + 1 : index - 1;
    if (newIndex >= 0 && newIndex < $('.item').length) {
      $.ajax({
        url: 'move_item.php',
        type: 'POST',
        data: {index: index, newIndex: newIndex},
        success: function() {
          $('.item').eq(newIndex).before(item);
          updateItemId(newIndex);
        }
      });
    }
  });
}

export default moveItem;