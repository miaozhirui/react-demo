import React from 'react';
import {Link} from 'react-router';

import './app.less';

export default class App extends React.Component{

	render(){

		return (
			<div>
				{this.props.children}
				<nav className="root-nav">
					<Link to="firstPage">第一页</Link>
					<Link to="secondPage">第二页</Link>
					<Link to="thirdPage">第三页</Link>
					<Link to="fourPage">第四页</Link>
				</nav>
			</div>
			)
	}
}

