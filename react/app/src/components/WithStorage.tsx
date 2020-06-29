import React, {FC} from 'react';

interface IHandlers {
  loadStorage: (key: string) => string,
  saveStorage: (key: string, data: string) => void,
  removeStorage: (key: string) => void,
}

export const withStorage = (WrappedComponent: FC<IHandlers>) => {
  const WithStorage: FC = () => {

    const checkLocalStorageExists = () => {
      const testKey = 'test';
      try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    }

    const localStorageAvailable = checkLocalStorageExists();

    const loadStorage = (key: string) => {
      if (localStorageAvailable) {
        return localStorage.getItem(key) || "";
      }
      return "";
    }

    const saveStorage = (key: string, data: string) => {
      if (localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }

    const removeStorage = (key: string) => {
      if (localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }

    return (
      <WrappedComponent {...{loadStorage,saveStorage,removeStorage}} />
    );
  }

  return WithStorage;
}
