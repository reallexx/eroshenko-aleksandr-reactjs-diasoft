import React from "react"

interface NewTodoInterface {
    handleAdd: (string: string) => void
}

function NewTodo(props: NewTodoInterface) {
    const checkTodoText = (elem: HTMLInputElement | null) => !!(elem && elem.value)
    const getTodoText = (elem: HTMLInputElement | null) => elem ? elem.value : ""
    const clearForm = (form: HTMLFormElement | null) => form && form.reset()
    return (
        <form id="form">
            <div className="todo">
                <input className="todo-text"
                    id="todo"
                    type="text"
                    placeholder="Новое дело"
                    defaultValue=""
                    onFocus={() => {
                        const todo = document.querySelector("#todo") as HTMLInputElement
                        todo.style.borderColor = 'initial'
                    }}
                />
                <p>
                    <input
                        type="button"
                        value="Добавить"
                        onClick={() => {
                            const todo = document.querySelector("#todo") as HTMLInputElement
                            if (checkTodoText(todo)) {
                                const todoText = getTodoText(todo)
                                props.handleAdd(todoText)
                                const form = document.querySelector("#form") as HTMLFormElement
                                clearForm(form)
                            } else {
                                todo.style.borderColor = 'red'
                                //todo.style.backgroundColor = 'mistyrose'
                            }
                        }}
                    />
                </p>
            </div>
        </form>
    )
}

export default NewTodo
