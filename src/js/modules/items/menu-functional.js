import { remove } from "./animate-item.js";
import { updateItems } from "./update-database.js";
import { ajaxEdit, ajaxMove, ajaxRemove } from '../ajax/figurative-ajax.js'

/**
 * Удаление элемента
 * @param {array} items - Массив, содержащий в себе массив элементов страницы.
 */
export function removeItem(items) {
    $(document).on('click', '.menu_item:contains("Удалить")', async function() {
        /**
         * Элемент при клике
         */
        const item = $(this).closest('.item');
        /**
         * Индекс элемента
         */
        const index = $('.item').index(item);
        setTimeout( async () => {
            /**
             * Запрос на удаление элемента
             */
            await ajaxRemove({
                items: items,
                index: index,
            });
            /**
             * Обработка ошибок
             */
            try {
                /**
                 * Удаление элемента
                 */
                await remove(index);
                /**
                 * Обработка ошибок
                 */
                try {
                    setTimeout(() => {
                        item.remove();
                        updateItems(items);
                    }, 400);
                } catch(error) {
                    console.error('Произошла ошибка при анимации удаления: ', error);
                }
            } catch(error) {
                console.error('Произошла ошибка при уделнии данных: ', error);
            }
        }, 400);
    });
}

/**
 * Редактирование текста элемента
 * @param {array} items - Массив, содержащий в себе массив элементов страницы.
 */
export function editText(items) {
    $(document).on('click', '.menu_item:contains("Переименовать")', async function() {
        /**
         * Элемент при клике
         */
        const item = $(this).closest('.item');
        /**
         * Индекс элемента
         */
        const index = $('.item').index(item);
        /**
         * Проверка на редактируемые элементы
         */
        if (!$('.list').find('.input').length) {
            /**
             * Создание input
             */
            const inputElement = $('<input>', {
                type: 'text',
                name: 'edit',
                value: item.find('.item_text').text(),
                class: 'input'
            });
            /**
             * Создание замена .item_text на input
             */
            item.find('.item_text').hide();
            item.find('.item__wrap').append(inputElement);
            /**
             * Вызов функции обработчика для сохранения или отмены редактирования
             */
            save({
                item: item,
                items: items,
                input: item.find('.input'),
                index: index
            });
        } else {
            alert("Можно редактировать только один блок одновременно!")
        }
    });
}

/**
 * Сохранение редактированного текста элемента
 * @param {object} data - Объект, содержащий в себе массив элементов страницы под ключем items, выбранный элемент под ключем item, index выбранного элемента и input этого элемента подключем input.
 */
function save(data) {
    /**
     * Функция завершения редактирования (замены input на .item_text)
     */
    const end = () => {
        data.item.find('.item_text').show();
        data.input.remove();
    }

    /**
     * Обработчик применения/отмены редактирования
     */
    $('.list').keydown(async function (e) {
        /**
         * применение
         */
        if (e.key === 'Enter') {
            await ajaxEdit({
                items: data.items,
                index: data.index,
                input: data.input,
                item: data.item,
            });
            try {
                /**
                 * Перенос значеня input в .item_text
                 */
                data.item.find('.item_text').text = data.input.val();
                end();
                /**
                 * Ререндер элементов на странице
                 */
                updateItems(data.items);
            } catch(error) {
                console.error('Произошла ошибка при редактировании данных: ', error);
            }
            /**
             * отмена
             */
        } else if (e.key === 'Escape') {
            end();
        }
    });
}

/**
 * Перемещение элемента
 * @param {array} items - Массив, содержащий в себе массив элементов страницы.
 */
export function moveItem(items) {
    $(document).on('click', '[data-direction]', async function() {
        /**
         * Индекс элемента при клике
         */
        const index = $('.item').index($(this).closest('.item'));
        /**
         * ($(this).data('direction') - направление в data аттрибуте кнопки)
         */
        await ajaxMove({
            items: items,
            index: index,
            direction: $(this).data('direction'),
        });
        /**
         * Обработка ошибок
         */
        try {
            /**
             * Ререндер элементов на странице
             */
            updateItems(items);
        } catch(error) {
            console.error('Произошла ошибка при перемещении элемента: ', error);
        }
    });
}