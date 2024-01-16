import React from 'react'
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

    // task complete
    const handleDone = (id: number) => {
        // map and select 
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    // delete task
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }


    return (
        <form className='todos_single'>
            {
                todo.isDone ? (
                    <s className='todos_single--text'>
                        {todo.todo}
                    </s>
                ) : (
                    <span className='todos_single--text'>
                        {todo.todo}
                    </span>
                )
            }

            <div>
                <span className="icon">
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
