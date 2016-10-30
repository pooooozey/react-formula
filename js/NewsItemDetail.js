import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

class FormulaItemDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newsList:null
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
	      	this.setState({newsList:data['newsList']});
	      },
	      error: (xhr, status, err) => {
	      	console.error(err);
	      },
	    });
	}
	render(){
		let img = this.state.newsList?this.state.newsList[this.props.params.id].imgsrc:"images/loading.gif";
		let title = this.state.newsList?this.state.newsList[this.props.params.id].title:"";
		let cont = this.state.newsList?this.state.newsList[this.props.params.id].cont:"";
		return (
			<div>
				<div id="head">
					<Link to="/" className="back">&lt; 返回</Link>
	    			资讯
	    		</div>
				<div className="detail">
					<p className="tc"><img src={img} /></p>
					<div className="detail_box">
						<h2 className="title">{title}</h2>
						<div className="cont" dangerouslySetInnerHTML={{__html:cont}} />
					</div>
				</div>				
			</div>
		);
	}
}


export { FormulaItemDetail as default };