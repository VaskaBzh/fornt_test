import { animateItem } from "./animateItem.js";

const addItem = () => {
  $('.item-add').click(function() {
    $.ajax({
      url: 'add_item.php',
      type: 'POST',
      data: {text: 'Новый элемент'},
      error: function(data) {
        $('.item-add').before(`
          <div class="item">
            <div class="item__head">
              <span class="id">4</span>
              <div class="doths">
                <div class="doth"></div>
                <div class="doth"></div>
                <div class="doth"></div>
                <div class="menu">
                  <div class="menu_item">Переименовать</div>
                  <div class="menu_item" data-direction="up">Сдвинуть вперед</div>
                  <div class="menu_item" data-direction="down">Сдвинуть назад</div>
                  <div class="menu_item">Удалить</div>
                </div>
              </div>
            </div>
            <p class="item_text">Текст элементов</p>
          </div>
        `);
        $('.item:not(.item-add)').removeClass('active');
        $('.item:not(.item-add)').last().addClass('active');
        animateItem("add");
      }
    });
  });
}
export default addItem;
