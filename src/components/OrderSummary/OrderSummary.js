import React from 'react'
import Aux from '../hoc/Aux'

const orderSummary = (props) => {

	const summary = Object.keys(props.ingredients).map(
		(val) => {
			return <li key={val}>{val} : {props.ingredients[val]}</li>
		}
	)

	return (
		<Aux>
			<ul>
				{summary}
			</ul>
			<button onClick={props.orderButtonHandler}>Checkout</button>
		</Aux>
	)
}

export default orderSummary
