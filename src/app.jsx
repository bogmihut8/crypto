import React from 'react';
import CurrencyList from './components/elem/CurrencyList';
import 'normalize.css';
import 'styles/index.scss';

export default class App extends React.Component {
	render() {
		return (
            <div>
                <div className="main-container">
                    <CurrencyList />
                </div>
            </div>
		)
	}
}
