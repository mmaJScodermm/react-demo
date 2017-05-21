import React,{ Component } from 'react';

import '../styles/taskitem.css';

import { connect } from 'react-redux';

class TaskItem extends Component{
	render(){
		return (
			<div className="todoitem-wrapper">
				<span className="icon-mic" onClick={this.clickDel}></span>
				<span className="message">{ this.props.text }</span>
				<span className="icon-mic" onClick={this.clickHandler} ></span>
			</div>
		)
	}
	clickHandler=()=>{
		const {dispatch,index}=this.props;
		dispatch({
			type:'GET_TODO_DOWN',
			payload:{
				index
			}
		})
	}
	clickDel=()=>{
		const {dispatch,index}=this.props;
		dispatch({
			type:'GET_TODO_DEL',
			payload:{
				index
			}
		})
	}
}

export default connect()(TaskItem);






