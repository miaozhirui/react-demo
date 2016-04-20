import React from 'react';

import './first-page.less';

export default class FirstIndex extends React.Component{

	render(){
		console.log(this.props);
		return (
			<div className="first-page">
				<h4>搭建react+es6+webpack工作流</h4>
			</div>
			
			)
	}

	componentWillUnmount() {
		console.log('组件从dom中移除之后的回调')
	}
	
}