import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

class NewsItem extends React.Component{
	render(){
        let L = "/home/newsDetail/"+this.props.id;
		return (
			<li>
                <Link to={L}>
                    <div className="img">
                        <img src={this.props.imgsrc} />
                    </div>
                    <h3>{this.props.title}</h3>
                    <div className="caption">{this.props.caption}</div>
                </Link>
            </li>
		);
	}
}

export { NewsItem as default };