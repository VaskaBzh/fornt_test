import { add, remove } from "./animate.js";

export function animateItem(type, index) {
  type === "add" ? add() : remove(index)
}