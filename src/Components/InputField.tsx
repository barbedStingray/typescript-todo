import React, { useRef } from 'react';
import './styles.css';


// interface for setting the type of your props passed down.
// any props coming down need to be in the interface
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// prop types are identified by the { ..., ... } : Types
// * Alternate version of writing your function
// const InputField: React.FC<Props> = ({ todo, setTodo }) => {
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  // creating a use ref = document.getElement by classname or id... a hook
  // ref will need a type --> These tags are found by hovering over the element needed
  const inputRef = useRef<HTMLInputElement>(null);


  return (

    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      // use ref hook with typescript - ? is optional
      inputRef.current?.blur();
    }}>
      <input type='input'
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a Task'
        className='input_box' />

      <button className='input_submit' type='submit' >Add</button>

    </form>
  )
}

export default InputField;
