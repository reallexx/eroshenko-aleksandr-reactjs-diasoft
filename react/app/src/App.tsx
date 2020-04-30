import React from "react"

import "./App.scss"

import Header from "./components/Header"
import Loader from "./components/Loader"
import TodoItem from "./components/TodoItem"
import NewTodo from "./components/NewTodo"

import todoData from "./todoData"

type AppState = {
    todos: any[],
    isLoading: boolean
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            todos: [],
            isLoading: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                todos: todoData,
                isLoading: false
            })
        }, 1000)
    }

    /*handleChange(id) {
        this.setState(prevState => {
            // @ts-ignore
            const updTodos = prevState.todos.map(item => {
                if (item.id === id) {
                    item.done = !item.done
                }
                return item
            })
            return {
                todos: updTodos
            }
        })
    }*/

    handleChange(id: number) {
        this.setState(prevState => {
            return {
                ...prevState,
                todos: prevState.todos.map(item => {
                    return item.id === id ? {...item, done: !item.done} : item
                })}
        })
    }

    handleAdd(text: string) {
        text && this.setState(prevState => {
            const newTodo = [{
                id: Math.random(),
                caption: text,
                done: false
            }]
            return {
                ...prevState,
                todos: prevState.todos.concat(newTodo)
            }
        })

    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div>
                <Header />
                <div>
                    {
                        this.state.isLoading ?
                        <Loader /> :
                        <div>
                            <div className="todo-list">
                                {todoItems}
                            </div>
                            <NewTodo handleAdd={this.handleAdd} />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default App
