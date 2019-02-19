import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import App from './app';
import About from './components/views/About';
import News from './components/views/News';
import Currency from './components/views/Currency';
import Header from './components/elem/Header';
import Footer from './components/elem/Footer';
import 'styles/index.scss';

export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
                    <Header />
					<Route exact path="/" component={App}/>
					<Route path="/about" component={About}/>
					<Route path="/news" component={News}/>
                    <Route path="/currency/:coin" component={Currency}/>
                    <Footer />
				</div>
			</Router>
		)
	}
}
