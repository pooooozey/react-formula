import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute, Redirect ,IndexRedirect } from 'react-router';
import BodyBox from './js/BodyBox';
import MainBox from './js/MainBox';
import OnlineMain from './js/OnlineMain';
import LocalBox from './js/LocalBox';
import FormulaItemDetail from './js/FormulaItemDetail';
import LocalMain from './js/LocalMain';
import NewsItemDetail from './js/NewsItemDetail';
import Add from './js/Add';
import LocalFormulaItemDetail from './js/LocalFormulaItemDetail';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={BodyBox}>
			<IndexRedirect to="home" />
			<Route path="home" component={MainBox}>
				<IndexRoute component={OnlineMain}/>
					<Route path="online" component={OnlineMain}>
				</Route>
				<Route path="formulaItemDetail/:id" component={FormulaItemDetail} />
				<Route path="newsDetail/:id" component={NewsItemDetail} />
			</Route>
			<Route path="local" component={LocalBox}>
				<IndexRoute component={LocalMain}/>
					<Route path="offline" component={LocalMain}>
				</Route>
				<Route path="localFormulaItemDetail/:id" component={LocalFormulaItemDetail} />
				<Route path="/add" component={Add} />
			</Route>

		</Route>
	</Router>
	,document.getElementById("app")
);
