import React from "react"
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

interface NewTodoInterface {
    handleAdd: (string: string) => void
}

function NewTodo(props: NewTodoInterface) {
    const checkTodoText = (elem: HTMLInputElement | null) => !!(elem && elem.value)
    const getTodoText = (elem: HTMLInputElement | null) => elem ? elem.value : ""
    const clearForm = (form: HTMLFormElement | null) => form && form.reset()
    return (
        <form id="form" action="#">
            <div className="todo-list todo">
                <InputText
                    id="todo"
                    placeholder="Новое дело"
                    defaultValue=""
                    onFocus={() => {
                        const todo = document.querySelector("#todo") as HTMLInputElement
                        todo.style.borderColor = 'initial'
                    }}
                />
                <p>
                    <Button
                        label="Добавить"
                        onClick={() => {
                            const todo = document.querySelector("#todo") as HTMLInputElement
                            if (checkTodoText(todo)) {
                                const todoText = getTodoText(todo)
                                props.handleAdd(todoText)
                                const form = document.querySelector("#form") as HTMLFormElement
                                clearForm(form)
                            } else {
                                todo.style.borderColor = 'red'
                            }
                        }}
                    />
                </p>
            </div>
        </form>
    )
}

export default NewTodo
