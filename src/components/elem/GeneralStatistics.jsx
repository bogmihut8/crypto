import React from 'react';

export default class GeneralStatistics extends React.Component {
    constructor(props){
        super(props);      
        this.state = { data : []  };
    } 
    
    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/global/")
          .then(response => response.json())
          .then(json => {
            this.setState({
              data: json
            });
          });
    }
    
	render() {
		return (
			<div className="generalStatistics">
                <p>
                    <span>Active Currencies: </span><span className="bold">{this.state.data.active_currencies}</span>&nbsp;/&nbsp;
                    <span>Active Markets: </span><span className="bold">{this.state.data.active_markets}</span>&nbsp;/&nbsp;
                    <span>Total Market: </span><span className="bold">${Number(this.state.data.total_market_cap_usd).toLocaleString()}</span>
                </p>
			</div>
		)
	}
}
