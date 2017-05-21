import React,{ Component } from 'react';

import TodoItem from './todoItem';

import '../styles/panel.css';

import { connect } from 'react-redux';

class Panel extends Component{
	render(){
		return (
			<div className="panel">
			<span className="icon-home"></span>
			<span className="title-content">{ this.props.title }</span>
			<div className="item-wrapper">
				{ this.getTodoItems() }
			</div>
			</div>
		)
	}
	getTodoItems=()=>{
		if(!this.props.todos) return;
		return this.props.todos.map((text,index)=>{
			return <TodoItem text={text} key={text+index} index={index}/>
		})
	}
}

export default connect((store)=>{
	return {
		todos:store.todos
	}
})(Panel);



