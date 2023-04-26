/**
 * Функция для получения случайного градиента.
 */
import { getRandomLinearGradient } from "../items/get-random-color.js"

/**
 * Эмуляция AJAX запроса добавления с задержкой
 */
export function ajaxAdd() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                text: `Новый элемент`,
                color: `${getRandomLinearGradient()}`,
            });
        }, 100);
    });
}

/**
 * Эмуляция AJAX запроса удаления
 * @param {object} data - Объект, содержащий в себе массив элементов страницы под ключем items и index выбранного элемента.
 */
export function ajaxRemove(data) {
    // Очистка элемента массива
    data.items.splice(data.index, 1);
}

/**
 * Эмуляция AJAX запроса редактирования
 * @param {object} data - Объект, содержащий в себе массив элементов страницы под ключем items и index выбранного элемента.
 */
export function ajaxEdit(data) {
    // Замена элемента массива обновленным
    data.items.splice(data.index, 1, {
        text: data.input.val(),
        color: data.item.find('.item__wrap').attr("style"),
    });
}


/**
 * Эмуляция AJAX запроса перемещения элемента
 * @param {object} data - Объект, содержащий в себе массив элементов страницы под ключем items, index выбранного элемента и направление перемещения под ключем direction.
 */
export function ajaxMove(data) {
    /**
     * Функция перемещения элемента вперед
     * @param {object} data - Объект, содержащий в себе массив элементов страницы под ключем items и index выбранного элемента.
     */
    function up(data) {
        if (data.index < data.items.length - 1) {
            data.items.splice(data.index + 1, 0, data.items.splice(data.index, 1)[0]);
        }
    }

    /**
     * Функция перемещения элемента назад
     * @param {object} data - Объект, содержащий в себе массив элементов страницы под ключем items и index выбранного элемента.
     */
    function down(data) {
        if (data.index > 0) {
            data.items.splice(data.index - 1, 0, data.items.splice(data.index, 1)[0]);
        }
    }

    /**
     * Определение направления перемещения
     */
    data.direction === "up" ? up({
        index: data.index,
        items: data.items,
    }) : down({
        index: data.index,
        items: data.items,
    });
}