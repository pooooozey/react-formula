import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link,hashHistory } from 'react-router'
import IngredientShow from './IngredientShow';

class FormulaItemDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formulaList:[]
		};
	}
	componentWillMount(){
		this.loadOnlineData();
	}
	loadOnlineData(){
		$.ajax({
			url: "test.js",
			dataType: 'json',
			cache: false,
			success: data => {
				this.setState({formulaList:data['formulaList']});
			},
			error: (xhr, status, err) => {
				console.error(err);
			},
	    });
	}
	getFormulaFromList(ID){
		for(let i=0;i<this.state.formulaList.length;i++){
			if(this.state.formulaList[i].id==ID){
				return this.state.formulaList[i];
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
	collect(){
		let item = this.getFormulaFromList(this.props.params.id);
        let randomID = "ingredient"+parseInt(Math.random()*100)+new Date().getTime();
		item.id = randomID;

		let local = JSON.parse(localStorage.getItem("formulaList"));

        if(!local){
            local = [];
        }
        local.push(item);
        localStorage.setItem("formulaList",JSON.stringify(local));

        hashHistory.push('/local');
		
	}
	render(){
		let item = this.getFormulaFromList(this.props.params.id);
		let img = item?item.imgsrc:"images/loading.gif";
		let title = item?item.title:"";
		let cont;
		if(item){
			cont = item.ingredients.map(function(item,index){
	            return (
	                <IngredientShow key={index} id={index} name={item.name} weight={item.weight} total={item.total} />
	            );
	        })
		}

        return (
			<div>
				<div id="head">
					<Link to={this.props.location.query.property} className="back">&lt; 返回</Link>
	    			平台中心
	    			<span className="add" onClick={this.collect.bind(this)}>收藏</span>
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


export { FormulaItemDetail as default };