import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Checkbox} from 'primereact/checkbox';

import {ITodo} from '../types/types';

const doneStyle = {
  fontStyle: 'italic',
  color: '#cdcdcd',
  textDecoration: 'line-through',
};

const pointerStyle = {
  cursor: 'pointer',
};

interface IProps {
  item: ITodo;
}

interface IHandlers {
  onChange: () => void;
  onDoubleClick: () => void;
}

export const TodoItem: FC<IProps & IHandlers> = (props) => {
  const {item, onChange, onDoubleClick} = props;
  const {done, caption, id} = item;

  return (
    <div className="todo-item">
      <Checkbox className="check-box" checked={done} onChange={onChange} />
      <p>
        <Link to={'/todo?id=' + id} style={done ? doneStyle : undefined}>
          {caption}
        </Link>
      </p>
      <p style={pointerStyle} onClick={onDoubleClick}>
        Х
      </p>
    </div>
  );
};
