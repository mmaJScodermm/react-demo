import React,{ Component } from 'react';

import DownItem from './downItem';

import '../styles/panel.css';

import { connect } from 'react-redux';

class Panel extends Component{
	render(){
		return (
			<div className="panel">
				<span className="icon-music"></span>
				<span className="title-content">{ this.props.title }</span>
				<div className="item-wrapper">
					{this.getDownItems()}
				</div>
			</div>
		)
	}
	getDownItems=()=>{
		if(!this.props.downs) return;
		return this.props.downs.map((text,index)=>{
			return <DownItem text={text} key={text+index} index={index}/>
		})
	}
}

export default connect((store)=>{
	return {
		downs:store.downs
	}
})(Panel);