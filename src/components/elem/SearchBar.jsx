import React from 'react';
import AutoComplete from 'react-autocomplete'
import FaSearch from 'react-icons/lib/fa/search';

export default class SearchBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          data : [],
          value: ''
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
            <div className="searchBar">
                <AutoComplete
                  getItemValue={(item) => item.id}
                  inputProps={{ placeholder: 'Search for virtual coin' }}
                  items={this.state.data}
                  shouldItemRender={(item, value) => item.id.indexOf(value.toLowerCase()) > -1 && this.state.value.length > 1}
                  renderItem={(item, isHighlighted) =>
                    <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                      {item.name}
                    </div>
                  }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
            </div>
		)
	}
}
