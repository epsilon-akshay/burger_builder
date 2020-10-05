
import React, { Component } from 'react'
import style from './BurgerBuilderComponent.module.css'
import BurgerComponent from './BurgerComponent'

class BurgerBuilderComponent extends Component {
	render() {
		return (
			<div className={style.Builder}>
				<BurgerComponent label='cheese' event={() => this.props.onClickHandler('cheese')} />
				<BurgerComponent label='meat' event={() => this.props.onClickHandler('meat')} />
				<BurgerComponent label='bacon' event={() => this.props.onClickHandler('bacon')} />
				<BurgerComponent label='salad' event={() => this.props.onClickHandler('salad')} />
			</div>
		)
	}
}

export default BurgerBuilderComponent
