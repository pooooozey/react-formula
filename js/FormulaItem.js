import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link ,IndexLink } from 'react-router';


class NewsItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let property = this.props.property;
		let L;
		if(property=="local"){
			L = property+"/localFormulaItemDetail/"+this.props.id;
		}else{
			L = property+"/formulaItemDetail/"+this.props.id;
		}
		return (
			<li>
				<Link to={L} query={{property:property}}>
	                <div className="img">
	                    <img src={this.props.imgsrc} />
	                </div>
	                <h3>{this.props.title}</h3>
                </Link>
            </li>
		);
	}
}


export { NewsItem as default };