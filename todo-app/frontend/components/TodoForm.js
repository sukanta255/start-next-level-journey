"use client";

import { useState } from "react";

export default function TodoForm({ addTodo }) {

    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        addTodo(title);

        setTitle("");
    }

    return (
        <form onSubmit={submit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Todo"
            />

            <button>Add</button>

        </form>
    )

}