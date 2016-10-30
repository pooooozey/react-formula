import React from 'react';
import ReactDOM from 'react-dom';

class Ingredient extends React.Component{
    removeIngredient(){
        this.props.removeCB(this.props.id);
    }
	render(){
		return (
			<div className="row type_item">
                <a href="javascript:;" className="del" onClick={this.removeIngredient.bind(this)}>x</a>
                <div className="type">
                    <input type="text" className="ipt ipt-name" ref="name" placeholder="配料名称" defaultValue={this.props.name} />
                </div>
                <div className="type">
                    <input type="text" className="ipt ipt-weight" ref="weight" placeholder="配料重量" defaultValue={this.props.weight} />
                    <span className="fl">克</span>
                </div>
            </div>
		);
	}
}


export { Ingredient as default };