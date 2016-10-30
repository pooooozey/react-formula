import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link ,IndexLink } from 'react-router';
import NewsList from './NewsList';

class MainBox extends React.Component{
	render(){
		return (
			<div>
	            {this.props.children}
			</div>
		);
	}
}


export { MainBox as default };