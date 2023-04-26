/**
 * Создания рендер элемента
 */
export function renderItem(item) {
    return $(`<div class="item">
                <div class="item__wrap" style="${item.color}">
                    <div class="item__head">
                        <span class="id">${item.id + 1}</span>
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
                    <p class="item_text">${item.text}</p>
                </div>
            </div>`);
}