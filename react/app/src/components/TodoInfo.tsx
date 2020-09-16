import React, {FC, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import {withStorage} from '../components/WithStorage';

export interface IStorageHandlers {
  loadStorage: (key: string) => string;
  saveStorage: (key: string, data: string) => void;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Todo: FC<IStorageHandlers> = ({loadStorage}) => {
  const id = useQuery().get('id') as string;
  const getTodoData = (id: string) => {
    if (loadStorage) {
      const storedData = loadStorage('todos') ? JSON.parse(loadStorage('todos')) : [];
      if (storedData && Array.isArray(storedData) && storedData.length) {
        return storedData.filter((todo) => todo.id == id)[0];
      }
    }
    return {};
  };
  let todo = useRef(getTodoData(id));
  return (
    <div>
      <div className="todo-list todo">
        Вы хотели: {todo.current.caption} (добавлено {todo.current.date})
      </div>
    </div>
  );
};

export const TodoInfo = withStorage(Todo);
