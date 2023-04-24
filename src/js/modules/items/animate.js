function clearCss(item) {
  item.css({});
}

export function add() {
  const item = $('.item:not(.item-add)').last();
  item.css({
    transform: `scale(${0})`,
    opacity: 0
  });
  setTimeout(function() {
    item.css({
      transform: `scale(${1})`,
      opacity: 1
    });
  }, 100);
  setTimeout(clearCss(item), 400);
}

export async function remove(index) {
  const item = $('.item:not(.item-add)').eq(index);
  item.css({
    transform: `scale(${1})`,
    opacity: 1
  });
  setTimeout(function() {
    item.css({
      transform: `scale(${0})`,
      opacity: 0
    });
  }, 100);
  setTimeout(clearCss(item), 400);
}