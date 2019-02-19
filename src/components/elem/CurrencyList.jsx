import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Table } from 'semantic-ui-react'
import FaUp from 'react-icons/lib/fa/chevron-up'
import FaDown from 'react-icons/lib/fa/chevron-down'
import HighlightedText from './HighlightedText'

export default class CurencyList extends React.Component { 
    
    constructor(props){
        super(props);      
        this.state = { data : []  };
    } 
    
    handleChangePercentage(value) {
        let number = Number(value);
        
        if(number < 0) {
            return (
                <span className="red"><FaDown className="icon"/> {Math.abs(number)}%</span>
            )
        }
        else {
            return (
                <span className="green"><FaUp className="icon"/> {Math.abs(number)}%</span>
            )
        }
    }
    
    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
          .then(response => response.json())
          .then(json => {
            this.setState({
              data: json
            });
          });
    }
    
	render() {
		return (
			<div className="currencyList">
                <div className="curencyListHeader">
                    <h2>Currencies</h2>
                    <HighlightedText />
                </div>
                  <Table celled selectable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell className="market-cap-cell center">Market Capacity</Table.HeaderCell>
                        <Table.HeaderCell className="center">Change 1h</Table.HeaderCell>
                        <Table.HeaderCell className="center">Change 1d</Table.HeaderCell>
                        <Table.HeaderCell className="center">Change 1w</Table.HeaderCell>
                        <Table.HeaderCell className="price-cell center">Price</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.data.map( (data, index) => 
                            <Table.Row key={data.symbol}>
                                <Table.Cell>{data.rank}</Table.Cell>
                                <Table.Cell className="name-cell"><Link to={"/currency/"+data.id}>{data.name + " ("+data.symbol+")"}</Link></Table.Cell>
                                <Table.Cell className="market-cap-cell center">${Number(data.market_cap_usd).toLocaleString()}</Table.Cell>
                                <Table.Cell className= {Number(data.percent_change_1h) < 0 ? 'negative center': 'positive center'}>{this.handleChangePercentage(data.percent_change_1h)}</Table.Cell>
                                <Table.Cell className= {Number(data.percent_change_24h) < 0 ? 'negative center': 'positive center'}>{this.handleChangePercentage(data.percent_change_24h)}</Table.Cell>
                                <Table.Cell className= {Number(data.percent_change_7d) < 0 ? 'negative center': 'positive center'}>{this.handleChangePercentage(data.percent_change_7d)}</Table.Cell>
                                <Table.Cell className="price-cell center">${Number(data.price_usd).toFixed(2)}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                  </Table>
			</div>
		)
	}
}
