import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
function App() {
  return <TodoList />; 
}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;
