export function getStore() {
    if (localStorage.items) {
        return JSON.parse(localStorage.items)
    }
}

export function setStore(items) {
    localStorage.items = JSON.stringify(items);
}