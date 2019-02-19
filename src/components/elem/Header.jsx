import React from 'react';
import Navigation from './Navigation';
import Statistics from './Statistics';
import GeneralStatistics from './GeneralStatistics';

export default class Header extends React.Component {
	render() {
		return (
            <div className="header">
                <div className="statistics-container">
                    <Statistics />
                </div>
                <div className="navigation-container">
                    <Navigation />
                </div>
                <div className="general-statistics-container">
                    <GeneralStatistics />
                </div>
            </div>
            
		)
	}
}
