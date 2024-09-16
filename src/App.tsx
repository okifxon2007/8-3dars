import { useRef, useState, useEffect } from 'react';
import Masala from './assets/masala/masala';
import './App.css';

function App() {
  const textRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<string[]>([]);

  
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleSave() {
    if (textRef.current && textRef.current.value.trim()) {
      setTodos((prevTodos) => [...prevTodos, textRef.current.value.trim()]);
     
    }
  }

  function handleDelete(index: number) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <>
      <Masala />
      <div className="conta">
        <div className="todoone">
          <h1>Todo App</h1>
        </div>
        <div className="todotwo">
          <input ref={textRef} type="text" placeholder="Text" /> <br /> <br />
          <button onClick={handleSave}>Save</button>
        </div>

        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index} className="todoparagraf">
              <h1>{todo}</h1>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        ) : (
          <div className="todoparagraf">
            <h1></h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
