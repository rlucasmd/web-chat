import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T) {
  const saved = localStorage.getItem(key);
  console.warn(saved);
  if (saved === null) return defaultValue;
  const parsedData = JSON.parse(saved) as T;
  return parsedData || defaultValue;
}

function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    const storageValue = getStorageValue(key, defaultValue);
    return storageValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export { useLocalStorage };
