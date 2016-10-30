import React from 'react';
import ReactDOM from 'react-dom';
import FormulaItem from './FormulaItem';

class FormulaList extends React.Component{
	render(){
        let property = this.props.property;
        let itemNode = this.props.formulaList.map(function(item){
            return (
                <FormulaItem property={property} id={item.id} key={item.id} title={item.title} imgsrc={item.imgsrc} />
            );
        });
		return (
			<dl>
                <dt className={this.props.property==="local"?'hide':''}>别人家的配方</dt>
                <dd>
                    <ul className="formula_list">
                        {itemNode}
                    </ul>
                </dd>
            </dl>
		);
	}
}


export { FormulaList as default };