import React from 'react';

export default class NewsCell extends React.Component {  
	render() {
        let divStyleImg = {
            backgroundImage: 'url(' + this.props.urlToImage + ')'
        };

		return (
			<a href={this.props.urlToNews} className="news-cell">
                <img src={this.props.urlToImage} />
                <h3>{this.props.title}</h3>
                <p>Published at {new Date().toLocaleDateString()}</p>
			</a>
		)
	}
}
