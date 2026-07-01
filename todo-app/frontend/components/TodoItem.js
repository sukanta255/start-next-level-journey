"use client";

export default function TodoItem({ todo, onDelete, onToggle }) {

    return (

        <div>

            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo)}
            />

            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                }}
            >
                {todo.title}
            </span>

            <button
                onClick={() => onDelete(todo._id)}
            >
                Delete
            </button>

        </div>

    )

}