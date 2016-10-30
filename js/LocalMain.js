import React from 'react';
import ReactDOM from 'react-dom';
import FormulaList from './FormulaList';
import { Router, Route, hashHistory, Link ,IndexLink } from 'react-router';


class LocalMain extends React.Component{
	constructor(props){
		super(props);
		let arr = JSON.parse(localStorage.getItem("formulaList"))||[];

		if(arr.length==0){
			arr = [
				{
					"id" : 0,
					"imgsrc" : "images/5.jpg",
					"title" : "夫妻肺片",
					"ingredients" : [
						{
							"name" : "牛肉",
							"total" : 20,
							"weight" : 20
						},
						{
							"name" : "牛舌",
							"total" : 20,
							"weight" : 20
						},
						{
							"name" : "牛心",
							"total" : 20,
							"weight" : 20
						},
						{
							"name" : "牛肚",
							"total" : 40,
							"weight" : 40
						}
					]
				}
			];
		}
        localStorage.setItem("formulaList",JSON.stringify(arr));

		this.state = {
			formulaList : arr
		}
	}
	render(){
		return (
			<div>
				<div id="head">
					<Link to="/add" className="add">添加</Link>
	    			我的配方
	    		</div>
	    		<div id="main">
					<FormulaList formulaList={this.state.formulaList} property="local"/>
	    		</div>
			</div>
		);
	}
}


export { LocalMain as default };