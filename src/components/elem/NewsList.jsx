import React from 'react';
import NewsCell from './NewsCell'

export default class NewsList extends React.Component {    
    constructor(props){
        super(props);      
        this.state = { data : []  };
    } 
    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=557cf52975e84bb382b0744e18a8a521")
          .then(response => response.json())
          .then(json => {
            this.setState({
              data: json.articles
            });
          });
    }
	render() {
        let news = this.state.data.map( (data, index) => {
            return (
                <NewsCell urlToNews={data.url} urlToImage={data.urlToImage} title={data.title} description={data.description}/>
            );
        });
		return (
            React.createElement('div', {"className": "newsList"}, ...news)
		)
	}
}
