import React from 'react';
import {Link} from 'react-router';

import './app.less';

export default class App extends React.Component{

	// 初始化
	constructor(){
		super()
		//初始化默认的state
		this.state = {name:1}
		//初始化默认的props
		this.defaultProps = {age:100}
		console.log('constructor');
	}

	// 定义组件并且返回组件
	render(){
		console.log('render');
		return (

			<div>
				{this.props.children}
				<nav className="root-nav">
					<Link to={{pathname: "firstPage", query:{id:1}}} activeClassName="active" >第一页</Link>
					<Link to="secondPage" activeClassName="active">第二页</Link>
					<Link to="thirdPage" activeClassName="active">第三页</Link>
					<Link to="fourPage" activeClassName="active">第四页</Link>
				</nav>
				
			</div>
			)
	}

	//组件渲染之前调用
    componentWillMount (){

    	console.log('componentWillMount');
    }

    //组件渲染之后调用
    componentDidMount (){
    	console.log(this.state);
    	console.log('componentDidMount');
    }
	
	//组件收到父组件传来的props调用,初始化渲染不调用,(提供渲染之前的一次调用)
	componentWillReceiveProps (nextProps) {
		
	}

	//在接受到新的state,props时候,即将渲染的时候调用
	shouldComponentUpdate (nextProps, nextState) {
	  	
	  	return true;
	}

	//在收到新的props,state之前立即调用
	componentWillUpdate (nextProps, nextState) {
		
	}

	//组件的更新同步dom之后立即调用
	componentDidUpdate () {
		
	}

	//组件从dom中移除的时候立即调用
	componentWillUnmount (){

	}
}
























































