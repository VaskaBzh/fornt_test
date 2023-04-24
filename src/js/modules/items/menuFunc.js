import { animateItem } from "./animateItem.js";
import { updateItems } from "./updateDb.js";

export function removeItem(items) {
    $(document).on('click', '.menu_item:contains("Удалить")', async function() {
        const item = $(this).closest('.item');
        const index = $('.item').index(item);
        await animateItem("remove", index);
        setTimeout(() => {
            item.remove();
            items.splice(index, 1);
            updateItems(items);
        }, 400);
    });
}

export function editText(items) {
    $(document).on('click', '.menu_item:contains("Переименовать")', async function() {
        const item = $(this).closest('.item');
        const index = $('.item').index(item);
        if (!$('.list').find('.input').length) {
            const inputElement = $('<input>', {
                type: 'text',
                name: 'edit',
                value: item.find('.item_text').text(),
                class: 'input'
            });
            item.find('.item_text').hide();
            item.find('.item__wrap').append(inputElement)
            save(item, items, item.find('.input'), index);
        } else {
            alert("Можно редактировать только один блок одновременно!")
        }
    });
}

function save(item, items, input, index) {
    const end = () => {
        item.find('.item_text').show();
        input.remove();
    }
    $('.list').keydown(function (e) {
        if (e.key === 'Enter') {
            item.find('.item_text').text = input.val();
            items.splice(index, 1, {
                text: input.val(),
                color: item.find('.item__wrap').attr("style"),
            });
            end();
            updateItems(items);
        } else if (e.key === 'Escape') {
            end();
        }
    });
}


export function moveItem(items) {
    $(document).on('click', '[data-direction]', async function() {
        const index = $('.item').index($(this).closest('.item'));
        $(this).data('direction') === "up" ? up(index, items) : down(index, items);
        updateItems(items);
    });
}

function up(index, items) {
    if (index < items.length - 1) {
        items.splice(index + 1, 0, items.splice(index, 1)[0]);
    }
}

function down(index, items) {
    if (index > 0) {
        items.splice(index - 1, 0, items.splice(index, 1)[0]);
    }
}