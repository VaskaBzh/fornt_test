import { setStore } from "./items/storage.js";

export async function unload(items) {
    $( window ).on( "unload", function() {
        setStore(items);
    } );
}