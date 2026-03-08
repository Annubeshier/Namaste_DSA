import {useState} from "react";

export default function App() {
    const [todo , setTodo] = useState([]);
    const [inputValue , setInputValue] = useState('');

const handleChange=(event)=>{
                setInputValue(event.target.value);
}
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodo([...todo ,inputValue]);
        setInputValue("");
    }
    const handleDelete = (index)=>{
        const newTodoList = [...todo];
        newTodoList.splice(index,1);
        setTodo(newTodoList);
    }
    
  return <div>
   <h1>Todo List </h1>
      <form>
      <input  placeholder='type your task here'
          type='text'
          value={inputValue}
          onChange={handleChange}/>
          <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
          {todo.map((item , index)=>(
      <li key={index}>{item}
      <button onClick={()=>handleDelete(index)}>Delete</button>
      </li>
          ))}</ul>
  </div>
}
