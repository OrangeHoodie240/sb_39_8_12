import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BoxList from './BoxList';

function App() {
  return <BoxList />;
}


ReactDOM.render(<App />, document.getElementById('root')); 

export default App;
