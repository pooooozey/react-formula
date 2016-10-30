import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link, hashHistory } from 'react-router'
import IngredientShow from './IngredientShow';

class LocalFormulaItemDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formulaList:[]
		};
	}
	contextTypes: {
	    router: React.PropTypes.object
	}
	componentWillMount(){
		this.loadLocalData();
	}
	loadLocalData(){
		let arr = JSON.parse(localStorage.getItem("formulaList"))||[];
		this.setState({formulaList:arr});
	}
	getItemFromLocal(ID){
		for(let i=0;i<this.state.formulaList.length;i++){
			if(this.state.formulaList[i].id==ID){
				return this.state.formulaList[i];
			}
		}
	}
	del(){
		let r = confirm("是否确定删除此项");
		if(r){
			for(let i=0;i<this.state.formulaList.length;i++){
				if(this.state.formulaList[i].id==this.props.params.id){
					this.state.formulaList.splice(i,1);
					localStorage.setItem("formulaList",JSON.stringify(this.state.formulaList));
					hashHistory.push('/local');
					return;
				}
			}
		}
	}
	weightIpt(){
		let w = parseInt(this.refs.weight.value)||100;
		
		let newState = this.state.formulaList;
		for(let i=0;i<newState.length;i++){
			if(newState[i].id==this.props.params.id){
				newState[i].ingredients.map(function(it,ind){
					it.total = it.weight*(w/100);
				});
			}
		}
        this.setState({formulaList:newState});
	}
	edit(){
		hashHistory.push({
			pathname : '/add',
			query : {
				exitID : this.props.params.id
			}
		});
	}
	render(){
		let item = this.getItemFromLocal(this.props.params.id);
		let img = item?item.imgsrc:"images/loading.gif";
		let title = item?item.title:"";
		let cont = item.ingredients.map(function(item,index){
            return (
                <IngredientShow key={index} id={index} name={item.name} weight={item.weight} total={item.total} />
            );
        })

		return (
			<div>
				<div id="head">
					<Link to={this.props.location.query.property} className="back">&lt; 返回</Link>
	    			我的配方
	    			<span className="edit" onClick={this.edit.bind(this)}>修改</span>
	    			<span className="add" onClick={this.del.bind(this)}>删除</span>
	    		</div>
				<div className="detail">
					<p className="tc"><img src={img} /></p>
					<div className="content">
						<h2>{title}</h2>
						<div className="row">
							<div className="title">
								重量
							</div>
							<div className="cont">
								<input type="text" ref="weight" placeholder="默认：100" onChange={this.weightIpt.bind(this)} className="ipt" />
								<span className="fl">克</span>
							</div>
						</div>
						<div className="row">
							<div className="title">
								配方
							</div>
							<div className="cont">
								<ul id="ingredients_list">
									{cont}
								</ul>
							</div>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}


export { LocalFormulaItemDetail as default };