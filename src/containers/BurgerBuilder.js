import React, { Component } from 'react'
import Aux from "../components/hoc/Aux"
import Burger from '../components/Burger/Burger'
import BurgerBuilderComponent from '../components/BurgerBuilder/BurgerBuilderComponent'
import Modal from "../components/Ui/Modal/Modal"
import OrderSummary from '../components/OrderSummary/OrderSummary'
import axiosInstance from '../axios'
import Spinner from '../components/Ui/Spinner/Spinner'
import WithError from '../components/hoc/WithError/WithError'
class BurgerBuilder extends Component {
	state = {
		ingredientsMap: {
			meat: 0,
			cheese: 0,
			salad: 0,
			bacon: 0
		},
		purchasable: false,
		purchasing: false,
		loading: false
	}

	addIngredientHandler = (ingredient) => {
		const newCount = this.state.ingredientsMap[ingredient] + 1
		const updatedIngredient = {
			...this.state.ingredientsMap
		}
		updatedIngredient[ingredient] = newCount
		this.setState({ ingredientsMap: updatedIngredient, purchasable: true })

	}

	isPurchasing = () => {
		this.setState({ isPurchasing: true })
	}

	isNotPurchasing = () => {
		this.setState({ isPurchasing: false })
	}

	isPurchasable = () => {
		const count = Object.values(this.state.ingredientsMap).reduce(
			(acc, elem) => { return (acc + elem) }, 0)

		if (count <= 0) {
			this.setState({ purchasable: false })
		} else {
			this.setState({ purchasable: true })
		}
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

		this.isPurchasable()
	}

	orderButtonHandler = () => {
		this.setState({ loading: true })
		axiosInstance.post("/orders.json", this.state.ingredientsMap)
			.then((response) => {
				console.log(response)
				this.setState({ loading: false })
				this.setState({ isPurchasing: false })
			})
			.catch((response) => {
				console.log(response)
				this.setState({ loading: false })
				this.setState({ isPurchasing: false })
			})
	}

	render() {
		let os = null
		if (this.state.loading) {
			os = <Spinner />
		} else {
			os = <OrderSummary orderButtonHandler={this.orderButtonHandler} ingredients={this.state.ingredientsMap} cancelHandler={this.isNotPurchasing} />
		}
		return (
			<Aux>
				<Modal show={this.state.isPurchasing} handleBackdrop={this.isNotPurchasing}>
					{os}
				</Modal>
				<Burger ingredients={this.state.ingredientsMap} />
				<BurgerBuilderComponent isPurchasingHandler={this.isPurchasing} onClickHandler={this.addIngredientHandler} onRemoveHandler={this.removeIngredientHandler} isPurchasable={!this.state.purchasable} />
			</Aux>
		)
	}
}

export default WithError(BurgerBuilder, axiosInstance)
