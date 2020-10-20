import React from 'react'
import classes from './Toolbar.module.css'
import Logo from "../../Logo/Logo"
import Nav from "../NavigationItems/NavigationItems"

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<div>Home</div>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<div className={classes.DesktopOnly}>
				<Nav />
			</div>
		</header>
	)
}

export default toolbar
