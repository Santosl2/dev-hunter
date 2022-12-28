import { useCallback, useState } from "react";

export function useLocalStorage(key: string, defaultValue: unknown) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return defaultValue;

    const item = localStorage?.getItem(key) ?? null;
    return item ? JSON.parse(item) : defaultValue;
  });

  const setLocalStorageValue = useCallback(
    (newValue: unknown) => {
      localStorage?.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    },
    [key]
  );

  return [value, setLocalStorageValue];
}
