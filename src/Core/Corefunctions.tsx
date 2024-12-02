export function SaveToLocalStrg<T>(key: string, item: T): void {
    const storage = window.localStorage;
    const data = JSON.stringify(item);
    storage.setItem(key, data)
}

export function GetFromLocalStrg(key: string): Array<{name: string, email: string, password: string}> | null {
    const storage = window.localStorage;
    const data = storage.getItem(key);
    return data ? JSON.parse(data) : null;
}