
export function setSessionStorageItem(action, itemName, item) {
    switch (action) {
        case "set": window.sessionStorage.setItem(itemName, item);
            break;
        case "delete": window.sessionStorage.removeItem(itemName);
            break;
        default:
            break
    }
}

export function convertNetworkName(name) {
    switch (name) {
        case "homestead": return "ethereum";
        default: return name;
    }
}