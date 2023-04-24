import { animateItem } from "./animateItem.js";

const removeItem = () => {
  $(document).on('click', '.menu_item:contains("Удалить")', function() {
    const item = $(this).closest('.item');
    $.ajax({
      url: 'remove_item.php',
      type: 'POST',
      data: {text: 'Новый элемент'},
      error: async function() {
        await animateItem("remove", $('.item').index(this));
        setTimeout(() => {
          item.remove();
        }, 400);
      }
    });
  });
}
export default removeItem;
