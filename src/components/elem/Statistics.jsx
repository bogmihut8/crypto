import React from 'react';
import StatisticsCell from './StatisticsCell'

const statisticsUrl = "";

export default class Statistics extends React.Component {
    constructor(props){
        super(props);      
        this.state = { data : []  };
    } 
    
    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/?limit=8")
          .then(response => response.json())
          .then(json => {
            this.setState({
              data: json
            });
          });
    }
    
	render() {
        let currencies = this.state.data.map( (data, index) => {
            return (
                <StatisticsCell class="col-sm-1" name={data.name} symbol={data.symbol} value={data.price_usd} day={data.percent_change_24h} week={data.percent_change_7d} />
            );
        });
        return(
            React.createElement('div', null, ...currencies)
        );

	}
}
