
export default function useSessionStorage(itemName) {
    const item = JSON.parse(window.sessionStorage.getItem(itemName));
    return item;

}