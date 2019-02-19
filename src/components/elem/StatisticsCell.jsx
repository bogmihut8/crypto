import React from 'react';
import FaUp from 'react-icons/lib/fa/chevron-up'
import FaDown from 'react-icons/lib/fa/chevron-down'
import FaClock from 'react-icons/lib/fa/clock-o'
import FaCalendar from 'react-icons/lib/fa/calendar'

export default class StatisticsCell extends React.Component {
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
			<div className="statisticsCell">
                <p className="name">{this.props.name} ({this.props.symbol})</p>
                <p className="value">${Number(this.props.value).toFixed(2).toLocaleString()}</p>
                <p className="day"><FaClock className="icon"/> day: {this.handleChangePercentage(this.props.day)}</p>
                <p className="week"><FaCalendar className="icon"/> week: {this.handleChangePercentage(this.props.week)}</p>
			</div>
		)
	}
}
