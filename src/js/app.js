import * as flsFunctions from './modules/functions.js'
import { initJQ } from './modules/initJQ.js'
import addItem from './modules/items/addItem.js'
import { getStore } from "./modules/items/storage.js";
import { unload } from "./modules/unLoad.js";
import { updateItems } from "./modules/items/updateDb.js";
import { removeItem, editText, moveItem } from "./modules/items/menuFunc.js";

flsFunctions.isWebp();

initJQ();
$(document).ready(async function () {
    let items = [];
    if (localStorage.items) {
        items = getStore();
    }
    updateItems(items);
    addItem(items);
    removeItem(items);
    editText(items);
    moveItem(items);
    await unload(items)
});