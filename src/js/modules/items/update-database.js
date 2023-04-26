import { renderItem } from "./render-item.js";

/**
 * Обновление элементов
 * @param {array} items - Массив, содержащий в себе массив элементов страницы.
 */
export function updateItems(items) {
    /**
     * Проверка на наличие манипулируемых элементов в массиве
     */
    if (items.length > 0) {
        /**
         * Удаление старых элементов
         */
        $('.item:not(.item-add)').remove();
        items.forEach((item, index) => {
            /**
             * Присваивание актуального id элементу на странице и в массиве
             */
            item.id = index;
            /**
             * Добавление новых элементов перед кнопкой добавления
             */
            $('.item-add').before(renderItem(item));
        });
    }
}