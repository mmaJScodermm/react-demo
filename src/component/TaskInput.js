import React,{ Component } from 'react';
import '../styles/taskinput.css';
import { connect } from 'react-redux'; 

class TaskInput extends Component{
	render(){
		return (
				<input placeholder="请输入"
					className="task-input"
					onKeyDown={ this.keyDownHanlder }
					ref="taskInput"
				/>
			)
	}
	keyDownHanlder=(ev)=>{
		const { dispatch }=this.props;
		if(ev.key==='Enter'){
			if(!ev.target.value) return;
			dispatch({
				type:'CREATE_TODO',
				payload:{
					text:ev.target.value
				}
			})

			this.refs.taskInput.value='';
		}
	}
}

export default connect()(TaskInput);

