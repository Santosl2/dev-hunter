import { useCallback, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [storage, setStorage] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;

    const item = localStorage?.getItem(key) ?? null;
    return item ? JSON.parse(item) : defaultValue;
  });

  const setLocalStorageValue = useCallback(
    (newStorage: T) => {
      localStorage?.setItem(key, JSON.stringify(newStorage));
      setStorage(newStorage);
    },
    [key]
  );

  return {
    storage,
    setStorage: setLocalStorageValue,
  };
}
