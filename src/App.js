import React, { Component } from 'react';
import TodoListApp from './component/TodoListApp';
import './App.css';
import TeamOmegaHeader from './component/common/TeamOmegaHeader';




class App extends Component {
  render() {
    return (
      <div className='app'>
        <TeamOmegaHeader text='Todo App' type="h1" />
        <TodoListApp />
      </div>
    )
  }
}

export default App
