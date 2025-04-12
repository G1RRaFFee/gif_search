export function getLocaleFromLocalStorage(): string | null {
  return localStorage.getItem("locale");
}

export function setLocaleToLocalStorage(value: string): void {
  localStorage.setItem("locale", value);
}
