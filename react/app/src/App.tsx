import React, {Component} from 'react';

import './App.scss';

import {Header} from './components/Header';
import {Loader} from './components/Loader';
import {TodoItem} from './components/TodoItem';
import {NewTodo} from './components/NewTodo';

import {todoData} from './todoData';

type AppState = {
  todos: {id: number; caption: string; done: boolean}[];
  isLoading: boolean;
};

export class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: todoData,
        isLoading: false,
      });
    }, 1000);
  }

  handleChange(id: number) {
    this.setState({
      todos: this.state.todos.map((item) => {
        return item.id === id ? {...item, done: !item.done} : item;
      }),
    });
  }

  handleAdd(text: string) {
    const newTodo = [
      {
        id: Math.random(),
        caption: text,
        done: false,
      },
    ];
    this.setState({
      todos: this.state.todos.concat(newTodo),
    });
  }

  render() {
    const {state} = this;
    const {todos} = state;

    return (
      <div>
        <Header />
        <div>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <div>
              <div className="todo-list">
                {todos.map((item) => (
                  <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
                ))}
              </div>
              <NewTodo handleAdd={this.handleAdd} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
