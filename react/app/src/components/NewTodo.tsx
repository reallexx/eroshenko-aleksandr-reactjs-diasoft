import React, {FC, useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

interface IHandlers {
  handleAdd: (text: string) => void;
}

export const NewTodo: FC<IHandlers> = ({handleAdd}) => {
  const [text, setText] = useState('');
  const [borderColor, setBorderColor] = useState('initial');
  const inputStyle = {borderColor: borderColor};

  return (
    <form id="form" action="#">
      <div className="todo-list todo">
        <InputText
          style={inputStyle}
          id="todo"
          placeholder="Новое дело"
          defaultValue=""
          onFocus={() => {
            setBorderColor('initial');
          }}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />
        <p>
          <Button
            label="Добавить"
            onClick={() => {
              if (text) {
                handleAdd(text);
                setText('');
              } else {
                setBorderColor('red');
              }
            }}
            type="reset"
          />
        </p>
      </div>
    </form>
  );
};
