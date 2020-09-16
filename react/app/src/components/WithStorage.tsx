import React, {FC} from 'react';

const checkLocalStorageExists = () => {
  const testKey = 'test';
  try {
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

const localStorageAvailable = checkLocalStorageExists();

const loadStorage = (key: string) => {
  if (localStorageAvailable) {
    return localStorage.getItem(key) || '';
  }
  return '';
};

const saveStorage = (key: string, data: string) => {
  if (localStorageAvailable) {
    localStorage.setItem(key, data);
  }
};

interface IHandlers {
  loadStorage: (key: string) => string;
  saveStorage: (key: string, data: string) => void;
}

export const withStorage = (WrappedComponent: FC<IHandlers>) => {
  const WithStorage: FC = () => {
    return <WrappedComponent {...{loadStorage, saveStorage}} />;
  };

  return WithStorage;
};
