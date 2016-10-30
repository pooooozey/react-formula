import React from 'react';
import ReactDOM from 'react-dom';
import NewsItem from './NewsItem';

class NewsList extends React.Component{
	render(){
        let itemNode = this.props.newsList.map(function(item){
            return (
                <NewsItem id={item.id} key={item.id} title={item.title} caption={item.caption} imgsrc={item.imgsrc} />
            );
        });
		return (
			<dl>
                <dt>最新资讯</dt>
                <dd>
                    <ul className="news_list">
                        { itemNode }
                    </ul>
                </dd>
            </dl>
		);
	}
}


export { NewsList as default };