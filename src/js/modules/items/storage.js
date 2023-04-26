/**
 * Получение элементов из хранилища
 */
export function getStore() {
    if (localStorage.items) {
        return JSON.parse(localStorage.items)
    }
}

/**
 * Установка элементов в хранилище
 * @param {array} items - Массив, содержащий в себе массив элементов страницы.
 */
export function setStore(items) {
    localStorage.items = JSON.stringify(items);
}