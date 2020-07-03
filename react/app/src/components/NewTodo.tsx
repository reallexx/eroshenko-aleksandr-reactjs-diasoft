import React, {FC, useRef} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

interface IProps {}

interface IHandlers {
  dispatch: (arg0: any) => void;
}

const NewTodo: FC<IProps & IHandlers> = ({dispatch}) => {
  let value = '';

  return (
    <form
      id="form"
      onReset={(e) => {
        if (!value.trim()) {
          // @ts-ignore
          e.currentTarget[0].style.borderColor = 'red';
          return;
        }
        dispatch(addTodo(value));
        value = '';
      }}>
      <div className="todo-list todo">
        <InputText
          id="todo"
          placeholder="Новое дело"
          defaultValue=""
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'initial';
          }}
          onChange={(e) => {
            value = e.currentTarget.value;
          }}
        />
        <p>
          <Button label="Добавить" type="reset" />
        </p>
      </div>
    </form>
  );
};

export default connect()(NewTodo);
