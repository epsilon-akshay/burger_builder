import React, { Component } from 'react'
import classes from "./BurgerComponent.module.css"
class BurgerComponent extends Component {
	render() {
		return (
			<div className={classes.BuildConrol}>
				<div className={classes.Label}>{this.props.label}</div>
				<button className={classes.More} onClick={this.props.event}> more</button>
				<button className={classes.More}>  less</button>
			</div>
		)
	}
}

export default BurgerComponent
