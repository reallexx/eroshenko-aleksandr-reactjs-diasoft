import React from "react"

function TodoItem(props: any) {
    const doneStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.done}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.done ? doneStyle : undefined}>{props.item.caption}</p>
        </div>
    )
}

export default TodoItem
