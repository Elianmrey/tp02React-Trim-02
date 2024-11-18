export function SaveToLocalStrg<T>(key: string, item: T): void{
    const storage = window.localStorage;
    const data = JSON.stringify(item);
    storage.setItem(key, data)
}
