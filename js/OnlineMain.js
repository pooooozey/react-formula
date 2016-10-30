import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link ,IndexLink } from 'react-router';
import NewsList from './NewsList';
import FormulaList from './FormulaList';
import $ from 'jquery';

class OnlineMain extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newsList:[],
			formulaList:[]
		};
		this.loadData();
	}
	loadData(){
		$.ajax({
	      url: "test.js",
	      dataType: 'json',
	      cache: false,
	      success: data => {
	      	this.setState({newsList:data['newsList']});
	      	this.setState({formulaList:data['formulaList']});
	      	
	      },
	      error: (xhr, status, err) => {
	      	console.error(err);
	      },
	    });
	}
	render(){
		return (
			<div>
				<div id="head">
	    			平台中心
	    		</div>
				<div id="main">
	            	<NewsList newsList={this.state.newsList} />
					<FormulaList formulaList={this.state.formulaList} property="home"/>
				</div>
			</div>
		);
	}
}


export { OnlineMain as default };