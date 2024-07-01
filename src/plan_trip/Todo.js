import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!== id));
  };

  return (
    <div className='todoLi'>
      <input className='todoIn'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo list for your trip"
      />
      <button className='todoBtn' onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button className='todoBtn' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
