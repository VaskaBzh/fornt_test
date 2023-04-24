import { renderItem } from "./renderItem.js";

export function updateItems(items) {
    if (items.length > 0) {
        $('.item:not(.item-add)').remove();
        items.forEach((item, index) => {
            item.id = index;
            $('.item-add').before(renderItem(item));
        });
    }
}