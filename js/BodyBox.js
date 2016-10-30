import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link ,IndexLink } from 'react-router';
import MainBox from './MainBox';

class BodyBox extends React.Component{
	render(){
		return (
			<div>
				{this.props.children}
	            

		    	<div id="foot">
					<Link to="/home" className="foot-btn" activeClassName="active">平台</Link>
					<Link to="/local" className="foot-btn" activeClassName="active">本地</Link>
		    	</div>
			</div>
		);
	}
}


export { BodyBox as default };