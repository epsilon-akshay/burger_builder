import React from 'react'
import Nav from '../Navigation/NavigationItems/NavigationItems'
import Logo from "../Logo/Logo"
import classes from "./Sidebar.module.css"
import Aux from '../hoc/Aux'
import Backdrop from '../Ui/Backdrop/Backdrop'
const sidebar = (props) => {
	return (
		<Aux>
			<Backdrop show />

			<div className={classes.Sidebar}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<Nav />
			</div>
		</Aux>
	)
}

export default sidebar
