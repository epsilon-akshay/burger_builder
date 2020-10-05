
import React, { Component } from 'react'
import style from './BurgerBuilderComponent.module.css'
import BurgerComponent from './BurgerComponent'
import classes from './BurgerBuilderComponent.module.css'

class BurgerBuilderComponent extends Component {
	render() {
		return (
			<div className={style.Builder}>
				<BurgerComponent label='cheese' event={() => this.props.onClickHandler('cheese')} remove={() => this.props.onRemoveHandler('cheese')} />
				<BurgerComponent label='meat' event={() => this.props.onClickHandler('meat')} remove={() => this.props.onRemoveHandler('meat')} />
				<BurgerComponent label='bacon' event={() => this.props.onClickHandler('bacon')} remove={() => this.props.onRemoveHandler('bacon')} />
				<BurgerComponent label='salad' event={() => this.props.onClickHandler('salad')} remove={() => this.props.onRemoveHandler('salad')} />
				<button className={classes.OrderButton} onClick={this.props.isPurchasingHandler} disabled={this.props.isPurchasable}>ORDER NOW</button>
			</div>
		)
	}
}

export default BurgerBuilderComponent
