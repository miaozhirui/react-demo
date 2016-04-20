import React from 'react';
import {Link} from 'react-router';

import './app.less';

export default class App extends React.Component{

	render(){

		return (
			<div>
				{this.props.children}
				<nav className="root-nav">
					<Link to={{pathname: "firstPage", query:{id:1}}} activeClassName="active">第一页</Link>
					<Link to="secondPage" activeClassName="active">第二页</Link>
					<Link to="thirdPage" activeClassName="active">第三页</Link>
					<Link to="fourPage" activeClassName="active">第四页</Link>
				</nav>
			</div>
			)
	}
}
