import React, { Component } from 'react'
import Burger from '../components/Burger/Burger'

class BurgerBuilder extends Component {
	state = {
		ingredientsMap: {
			meat: 2,
			cheese: 2,
			salad: 1,
			bacon: 1
		}
	}
	render() {
		return <Burger ingredients={this.state.ingredientsMap} />
	}
}

export default BurgerBuilder
