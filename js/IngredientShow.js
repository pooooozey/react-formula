import React from 'react';
import ReactDOM from 'react-dom';

class IngredientShow extends React.Component{
	render(){
		return (
			<li>
                <span className="fl">{this.props.name}</span> <span className="fr">{this.props.total}克</span>
            </li>
		);
	}
}


export { IngredientShow as default };