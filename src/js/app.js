import { initJQ } from './modules/initJQ.js';
import addItem from './modules/items/add-item.js';
import { getStore } from "./modules/items/storage.js";
import { unload } from "./modules/unLoad.js";
import { updateItems } from "./modules/items/update-database.js";
import { removeItem, editText, moveItem } from "./modules/items/menu-functional.js";

// ----------------------------------------------------------------------------------------

/**
 * Добавляем jquery
 */
initJQ();

/**
 * Инициализация функций при загрузке документа
 */
$(document).ready(async function () {
    /**
     * Инициализируем массив items
     */
    let items = [];

    /**
     * Получаем сохраненные элементы из локального хранилища
     */
    if (localStorage.items) {
        items = getStore();
    }

    /**
     * Выполняем функции для обновления, добавления, удаления, редактирования и перемещения элементов
     */
    updateItems(items);
    addItem(items);
    removeItem(items);
    editText(items);
    moveItem(items);

    /**
     * Выгружаем элементы
     */
    await unload(items);
});