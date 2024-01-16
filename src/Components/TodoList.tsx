import React from 'react';
import './styles.css';
import SingleTodo from './SingleTodo';

import { Todo } from '../model';

interface Props {
    todos: Todo[];
    // hover on setTodos to find it's definition
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

  return (
    <div className='todos'>
      {todos.map(todo => (

        <SingleTodo 
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList;
