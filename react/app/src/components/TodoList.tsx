import React, {Component} from 'react';

import {TodoItem} from './TodoItem';
import {NewTodo} from './NewTodo';

import {todoData} from '../todoData';

interface IHandlers {
  load?: (key: string) => string
  save?: (key: string, data: string) => void
  remove?: (key: string) => void
}

interface IState {
  data: {id: number, caption: string, done: boolean}[]
}

export class TodoList extends Component<IHandlers,IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(id: number) {
    this.setState({
      data: this.state.data.map(item => {
        return item.id === id ? {...item, done: !item.done} : item;
      }),
    });
  }

  handleAdd(text: string) {
    const newTodo = [{
      id: Math.random(),
      caption: text,
      done: false,
    }];
    this.setState({
      data: this.state.data.concat(newTodo),
    });
  }

  componentDidMount() {
    try {
      const todos = this.props.load && JSON.parse(this.props.load('todos'));
      if (todos && Array.isArray(todos)) {
        this.setState({
          data: todos,
        });
      }
    } catch (e) {
      this.setState({
        data: todoData,
      });
    }
  }

  componentDidUpdate() {
    try {
      this.props.save && this.props.save('todos', JSON.stringify(this.state.data));
    } catch (e) {
    }
  }

  render() {
    const {state} = this;
    const {data} = state;

    return (
      <div>
        <div className="todo-list">
          {data.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)}
        </div>
        <NewTodo handleAdd={this.handleAdd}/>
      </div>
    );
  }
}
