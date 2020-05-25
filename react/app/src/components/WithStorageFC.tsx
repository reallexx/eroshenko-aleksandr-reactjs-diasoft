import React, {FC, useState, useEffect} from 'react';

interface IHandlers {
  load: (key: string) => string,
  save: (key: string, data: string) => void,
  remove: (key: string) => void,
}

export const withStorageFC = (WrappedComponent: FC<IHandlers>) => {
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

    const [localStorageAvailable] = useState(checkLocalStorageExists());

    const load = (key: string) => {
      if (localStorageAvailable) {
        return localStorage.getItem(key) || "";
      }
      return "";
    }

    const save = (key: string, data: string) => {
      if (localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }

    const remove = (key: string) => {
      if (localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }

    return (
      <WrappedComponent {...{load,save,remove}} />
    );
  }

  return WithStorage;
}
