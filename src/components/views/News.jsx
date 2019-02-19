import React from 'react';
import NewsList from '../elem/NewsList';

export default class News extends React.Component {
	render() {
		return (
			<div>
                <div className="news-header">
                    <h1>News</h1>
                </div>
                <div className="main-container no-white">
                    <NewsList />
                </div>
			</div>
		)
	}
}
