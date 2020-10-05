import React, { Component } from 'react'
import Ingredients from './Ingredients'
import styles from './Burger.module.css'

class Burger extends Component {
	render() {
		let ingredientsInOrder = Object.keys(this.props.ingredients).map(
			(val) => {
				return [...Array(this.props.ingredients[val])].map(
					(_, index) => {
						return <Ingredients key={index + val} type={val} />
					})
			}
		)
		return (
			<div className={styles.Burger}>
				<Ingredients type='bread-top' />
				{ingredientsInOrder}
				<Ingredients type='bread-bottom' />
			</div>
		)
	}
}

export default Burger
