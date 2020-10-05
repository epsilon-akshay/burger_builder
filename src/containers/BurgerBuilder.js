import React, { Component } from 'react'
import Aux from "../components/hoc/Aux"
import Burger from '../components/Burger/Burger'
import BurgerBuilderComponent from '../components/BurgerBuilder/BurgerBuilderComponent'

class BurgerBuilder extends Component {
	state = {
		ingredientsMap: {
			meat: 2,
			cheese: 2,
			salad: 1,
			bacon: 1
		}
	}

	addIngredientHandler = (ingredient) => {
		const newCount = this.state.ingredientsMap[ingredient] + 1
		const updatedIngredient = {
			...this.state.ingredientsMap
		}
		updatedIngredient[ingredient] = newCount
		this.setState({ ingredientsMap: updatedIngredient })
	}

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredientsMap} />
				<BurgerBuilderComponent onClickHandler={this.addIngredientHandler} />
			</Aux>
		)
	}
}

export default BurgerBuilder
