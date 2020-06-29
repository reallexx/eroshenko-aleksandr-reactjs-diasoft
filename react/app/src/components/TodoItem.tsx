import React, {FC} from 'react';
import {Checkbox} from 'primereact/checkbox';

const doneStyle = {
  fontStyle: 'italic',
  color: '#cdcdcd',
  textDecoration: 'line-through',
};

interface IProps {
  key: number;
  item: {id: number; caption: string; done: boolean};
}

interface IHandlers {
  handleChange: (id: number) => void;
}

export const TodoItem: FC<IProps & IHandlers> = (props) => {
  const {item, handleChange} = props;
  const {done, id, caption} = item;

  return (
    <div className="todo-item">
      <Checkbox className="check-box" checked={done} onChange={() => handleChange(id)} />
      <p style={done ? doneStyle : undefined}>{caption}</p>
    </div>
  );
};
