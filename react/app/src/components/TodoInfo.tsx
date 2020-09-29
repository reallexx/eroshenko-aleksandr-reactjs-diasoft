import React, {FC, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';

import {ITodo} from '../types/types';
import {getTodo} from '../actions/actions';

export interface IProps {
  todo: ITodo;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TodoInfo: FC<IProps> = ({todo = {}}) => {
  const dispatch = useDispatch();
  const id = useQuery().get('id') || '';
  let firstLook = useRef(true);
  useEffect(() => {
    if (firstLook.current === true) {
      dispatch(getTodo(id));
      firstLook.current = false;
    }  
  });
  return (
    <div>
      <div className="todo-list todo">
        Вы хотели: {todo.caption} (добавлено {todo.date})
      </div>
    </div>
  );
};

const TodoInfoConnected = connect<{}, {}, {}, IProps>((state) => ({
  todo: state.todo,
}))(TodoInfo);

export {TodoInfoConnected as TodoInfo};
