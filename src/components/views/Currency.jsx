import React from 'react';
import { Breadcrumb, Grid, Table } from 'semantic-ui-react'
import FaUp from 'react-icons/lib/fa/chevron-up'
import FaDown from 'react-icons/lib/fa/chevron-down'
import FaRight from 'react-icons/lib/fa/chevron-right'

export default class Currency extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data : [],
            markets: [],
            coin: '',
            error: false
        }
    }
      
    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/" + this.props.match.params.coin + "/")
          .then(response => response.json())
          .then(json => {
            this.setState({
                data: json[0],
                coin: json[0].id
            })
            fetch("https://api.cryptonator.com/api/full/"+json[0].symbol+"-usd")
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        markets: json.ticker.markets
                    })
                })
          })
          .catch(err => {
            this.setState({
                error: true
            });
          });
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
    
	render() {
		return (
            this.state.error ? 
            <div>
				<div className="main-container">
                    <h1>Error occured</h1>
                </div>
			</div>
            :
			<div>
                <div className="currency-container">
                    <div className="main-container">
                          <Breadcrumb>
                            <Breadcrumb.Section href="/">Currencies</Breadcrumb.Section>
                            <FaRight className="icon"/>
                            <Breadcrumb.Section link active>{this.state.data.name}</Breadcrumb.Section>
                          </Breadcrumb>
                        <h1 className="currency-header">{this.state.data.name} ({this.state.data.symbol})
                            <span className="right">
                                <span className="value">{Number(this.state.data.price_usd).toLocaleString()} USD</span>
                                <span className="last-24h">{this.handleChangePercentage(this.state.data.percent_change_24h)} in the last 24h</span>
                            </span>
                        </h1>
                        <div className="currency-stats">
                            <Grid doubling divided columns={5}>
                                <Grid.Column>
                                    <p className="mainstat">{Number(this.state.data["24h_volume_usd"]).toLocaleString()} USD
                                    </p>
                                    <p className="underlabel">24hr volume</p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className="mainstat">{Number(this.state.data.market_cap_usd).toLocaleString()} USD
                                    </p>
                                    <p className="underlabel">market capacity</p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className="mainstat">{Number(this.state.data.available_supply).toLocaleString()} USD
                                    </p>
                                    <p className="underlabel">available supply</p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className="mainstat">{Number(this.state.data.total_supply).toLocaleString()} USD
                                    </p>
                                    <p className="underlabel">total supply</p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p className="mainstat">{Number(this.state.data.max_supply).toLocaleString()} USD
                                    </p>
                                    <p className="underlabel">max supply</p>
                                </Grid.Column>
                              </Grid>
                        </div>
                    </div>
                </div>
                <div className="main-container currency-extra">
                        <Grid>
                            <Grid.Column width={16}>
                              <div className="currency-markets">
                                <Table basic='very' selectable>
                                    <Table.Header>
                                      <Table.Row>
                                        <Table.HeaderCell>Market</Table.HeaderCell>
                                        <Table.HeaderCell>Price</Table.HeaderCell>
                                        <Table.HeaderCell>Volume</Table.HeaderCell>
                                      </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.state.markets.map( (data, index) => 
                                            <Table.Row key={index}>
                                                <Table.Cell>{data.market}</Table.Cell>
                                                <Table.Cell>${Number(data.price).toFixed(2)}</Table.Cell>
                                                <Table.Cell>${Number(data.volume).toFixed(2)}</Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                  </Table> 
                              </div>
                            </Grid.Column>
                          </Grid>
                    </div>
			</div>
		)
	}
}
