import React, {FC, useState, useEffect} from 'react';

import {TodoItem} from './TodoItem';
import {NewTodo} from './NewTodo';

import {todoData} from '../todoData';

interface IHandlers {
  load: (key: string) => string;
  save: (key: string, data: string) => void;
  remove: (key: string) => void;
}

export const TodoList: FC<IHandlers> = (props) => {
  const [data, setData] = useState<{id: number; caption: string; done: boolean}[]>([]);
  const [init, setInit] = useState<boolean>(false);
  const {load} = props;

  const handleChange = (id: number) => {
    setData(
      data.map((item) => {
        return item.id === id ? {...item, done: !item.done} : item;
      }),
    );
  };

  const handleAdd = (text: string) => {
    const newTodo = [
      {
        id: Math.random(),
        caption: text,
        done: false,
      },
    ];
    setData(data.concat(newTodo));
  };

  useEffect(() => {
    if (!init) {
      try {
        const todos = load && JSON.parse(load('todosFC'));
        if (todos && Array.isArray(todos)) {
          setData(todos);
        }
      } catch (e) {
        setData(todoData);
      }
      setInit(true);
    }
  });

  useEffect(() => {
    try {
      props.save && props.save('todosFC', JSON.stringify(data));
    } catch (e) {}
  }, [data]);

  return (
    <div>
      <div className="todo-list">
        {data.map((item) => (
          <TodoItem key={item.id} item={item} handleChange={handleChange} />
        ))}
      </div>
      <NewTodo handleAdd={handleAdd} />
    </div>
  );
};
