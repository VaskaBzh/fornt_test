import * as flsFunctions from './modules/functions.js'
import { initJQ } from './modules/initJQ.js'
import addItem from './modules/items/addItem.js'
import removeItem from './modules/items/removeItem.js'
import updateItem from './modules/items/updateItem.js'

flsFunctions.isWebp()
initJQ();
addItem();
removeItem();
updateItem();