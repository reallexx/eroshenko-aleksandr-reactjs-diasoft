import React, {FC} from 'react';
import {Checkbox} from 'primereact/checkbox';

import {ITodo} from '../types/types';

const doneStyle = {
  fontStyle: 'italic',
  color: '#cdcdcd',
  textDecoration: 'line-through',
};

interface IProps {
  item: ITodo
}

interface IHandlers {
  onChange: () => void
  onDoubleClick: () => void
}

export const TodoItem: FC<IProps & IHandlers> = (props) => {
  const {item, onChange, onDoubleClick} = props;
  const {done, caption} = item;

  return (
    <div className="todo-item">
      <Checkbox className="check-box"
                checked={done}
                onChange={onChange}
      />
      <p style={done ? doneStyle : undefined} onDoubleClick={onDoubleClick}>{caption}</p>
    </div>
  );
}
