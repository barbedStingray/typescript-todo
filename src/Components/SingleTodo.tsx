import React, { useState } from 'react'
import { Todo } from '../model';
import { PiPencilCircleFill } from "react-icons/pi";
import { FiDelete, FiCheckCircle } from "react-icons/fi";
import './styles.css';



type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos, }: Props) => {

    // edit states
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    // task complete
    const handleDone = (id: number) => {
        // map and select 
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    // delete task
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    // edit task
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo:editTodo } : todo
        )))
        setEdit(false);
    }



    return (
        <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input 
                    value={editTodo} 
                    onChange={(e) => setEditTodo(e.target.value)}
                    className='todos_single--text'
                />
            ) : (
                todo.isDone ? (
                    <s className='todos_single--text'>
                        {todo.todo}
                    </s>
                ) : (
                    <span className='todos_single--text'>
                        {todo.todo}
                    </span>
                )
            )}

            {/* rendering complete or not */}

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <PiPencilCircleFill />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <FiDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <FiCheckCircle />
                </span>

            </div>


        </form>
    )
}

export default SingleTodo
