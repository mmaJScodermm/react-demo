import React, { Component } from 'react';

import TaskInput from './component/TaskInput';

import TodoPanel from './component/todoPanel';

import DownPanel from './component/downPanel';

import './styles/app.css';

import './styles/font-icon.css'

class App extends Component{
  render(){
    return(
      <div className="container">
        <TaskInput/>
        <div className="wrapper">
          <TodoPanel title="待办"/>
          <DownPanel title="已完成"/>
        </div>
      </div>
      )
  }
}

export default App;
