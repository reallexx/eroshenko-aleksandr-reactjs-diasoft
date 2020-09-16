import React, {FC, useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

interface IProps {}

interface IHandlers {
  dispatch: (arg0: any) => void;
}

const NewTodo: FC<IProps & IHandlers> = ({dispatch}) => {
  const [text, setText] = useState('');
  const [borderColor, setBorderColor] = useState('initial');
  const inputStyle = {borderColor: borderColor};

  return (
    <form
      id="form"
      onReset={(e) => {
        if (!text.trim()) {
          setBorderColor('red');
          return;
        }
        dispatch(addTodo(text));
        setText('');
      }}>
      <div className="todo-list todo">
        <InputText
          style={inputStyle}
          id="todo"
          placeholder="Новое дело"
          defaultValue=""
          onFocus={() => {
            setBorderColor('initial');
          }}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <p>
          <Button label="Добавить" type="reset" />
        </p>
      </div>
    </form>
  );
};

const NewTodoConnected = connect()(NewTodo);

export {NewTodoConnected as NewTodo};
