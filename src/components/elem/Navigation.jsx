import React from 'react';
import {Link} from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home'
import SearchBar from './SearchBar';
import GeneralStatistics from './GeneralStatistics';

export default class Navigation extends React.Component {
    render() {
		return (
			<div className="navigation">
				<ul>
					<li className={(window.location.pathname === "/") ? 'selected':''}><Link to="/"><FaHome className="faHome"/></Link></li>
					<li className={(window.location.pathname === "/about") ? 'selected':''}><Link to="/about">About</Link></li>
					<li className={(window.location.pathname === "/news") ? 'selected':''}><Link to="/news">News</Link></li>
				</ul>
                <SearchBar />
			</div>
		)
	}
}

