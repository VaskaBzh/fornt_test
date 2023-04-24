import { getRandomLinearGradient } from "../items/getRandomColor.js"

export function figAjax() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                text: `Новый элемент`,
                color: `${getRandomLinearGradient()}`,
            });
        }, 100);
    });
}