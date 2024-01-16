import React, { useState } from 'react';
import { Todo } from './model';

import InputField from './Components/InputField';
import TodoList from './Components/TodoList';

import './App.css';



// providing the React.FC defines app as the type: functional component
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');

  // must define the type from the model.ts
  // type array with interface
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // check and take information
    if(todo) {
      setTodos([ ...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('');
    }
  };

  console.log(`todos`, todos);

  return (
    <div className="App">
      <span className='heading'>TypeScript Todo!</span>

      <InputField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd}
      />

      {/* map to check that the dom is responding */}
      {/* {todos.map((t) => (<li>{t.todo}</li>))} */}
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      /> 


    </div>
  );
}

export default App;
