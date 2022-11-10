import React from 'react';
import Counter from './components/counter';
import TodoItems from './components/todoitems';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Exploring Redux DevTools</h1>
        <h3>**Using counters and list**</h3>
      </div>
        <h2>Counter</h2>
      <div>
        <Counter />
      </div>
        <h2>To Do List</h2>
      <div>
        <TodoItems />
      </div>
    </div>
  )
}

export default App;
