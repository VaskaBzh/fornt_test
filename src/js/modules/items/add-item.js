import { add } from "./animate-item.js";
import { ajaxAdd } from '../ajax/figurative-ajax.js'
import { renderItem } from "./render-item.js";

/**
 * Перемещение элемента
 * @param {array} items - Массив, содержащий в себе массив элементов страницы.
 */
const addItem = (items) => {
  $('.item-add').click(async function() {
    try {
      /**
       * Ответ от фигурального ajax запроса добавления элемента
       */
      const data = await ajaxAdd();
      /**
       * Обработка ошибок
       */
      try {
        /**
         * Модель объекта базы данных
         */
        const itemModel = {
          id: items.length,
          text: data.text,
          color: data.color,
        };
        items.push(itemModel);
        /**
         * Отрисовка эелемента перед кнопкой "Добавить элемент"
         */
        $('.item-add').before(renderItem(itemModel));
        /**
         * Анимация добавления элемента
         */
        add();
      } catch(error) {
        console.error('Произошла ошибка при добавлении элемента: ', error);
      }
    } catch(error) {
      console.error('Ошибка при добавлении элемента: ', error);
    }
  });
}
export default addItem;
