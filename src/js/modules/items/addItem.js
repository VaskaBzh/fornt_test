import { animateItem } from "./animateItem.js";
import { figAjax } from '../db/figurativeAjax.js'
import { renderItem } from "./renderItem.js";

const addItem = (items) => {
  $('.item-add').click(async function() {
    const data = await figAjax();
    const itemModel = {
      id: items.length,
      text: data.text,
      color: data.color,
    };
    items.push(itemModel);
    $('.item-add').before(renderItem(itemModel));
    animateItem("add");
  });
}
export default addItem;
