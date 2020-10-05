import React, { Component } from 'react'

const orderSummary = (props) => {

	const summary = Object.keys(props.ingredients).map(
		(val) => {
			return <li>{val} : {props.ingredients[val]}</li>
		}
	)

	return (
		<ul>
			{summary}
		</ul>

	)
}

export default orderSummary
