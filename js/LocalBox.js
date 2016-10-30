import React from 'react';
import ReactDOM from 'react-dom';
import FormulaList from './FormulaList';
import { Router, Route, hashHistory, Link ,IndexLink } from 'react-router';


class LocalBox extends React.Component{
	render(){
		return (
			<div>
	            {this.props.children}
			</div>
		);
	}
}


export { LocalBox as default };