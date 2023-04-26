/**
 * Очистка CSS стилей
 * @param {object} item - Выбранный элемент.
 */
function clearCss(item) {
  item.removeAttr('style');
}

/**
 * Анимация добавления элемента
 * @param {object} [options] - Опциональный объект с параметрами анимации.
 * @param {number} [options.scale=1] - Масштабирование элемента при добавлении.
 * @param {number} [options.opacity=1] - Прозрачность элемента при добавлении.
 */
export function add(options = {}) {
  const { scale = 1, opacity = 1 } = options;
  const item = $('.item:not(.item-add)').last();
  item.css({
    transform: `scale(${0})`,
    opacity: 0
  });
  setTimeout(function() {
    item.css({
      transform: `scale(${scale})`,
      opacity: opacity
    });
  }, 100);
  setTimeout(() => {
    clearCss(item)
  }, 400);
}

/**
 * Анимация удаления элемента
 * @param {number} index - Индекс выбранного элемента.
 * @param {object} [options] - Опциональный объект с параметрами анимации.
 * @param {number} [options.scale=0] - Масштабирование элемента при удалении.
 * @param {number} [options.opacity=0] - Прозрачность элемента при удалении.
 */
export async function remove(index, options = {}) {
  const { scale = 0, opacity = 0 } = options;
  const item = $('.item:not(.item-add)').eq(index);
  item.css({
    transform: `scale(${1})`,
    opacity: 1
  });
  setTimeout(function() {
    item.css({
      transform: `scale(${scale})`,
      opacity: opacity
    });
  }, 100);
  setTimeout(() => {
    clearCss(item)
  }, 400);
}