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

	removeIngredientHandler = (ingredient) => {
		let newCount = this.state.ingredientsMap[ingredient] - 1
		if (newCount < 0) {
			newCount = 0
		}

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
				<BurgerBuilderComponent onClickHandler={this.addIngredientHandler} onRemoveHandler={this.removeIngredientHandler} />
			</Aux>
		)
	}
}

export default BurgerBuilder
