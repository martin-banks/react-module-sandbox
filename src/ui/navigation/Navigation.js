import React from 'react'
import NavItem from './NavItem'
import atomLogo from '../icons/icons_atom.svg'
const navOptions = {
	atoms: [
		'Text',
		'Icon',
		'Logo',
		'Color',
		'Font'
	]
}

export default class Navigation extends React.Component {
	constructor(props){
		super(props)
		this.createItems = this.createItems.bind(this)
		this.checkActiveNav = this.checkActiveNav.bind(this)
	}

	checkActiveNav(viewToCheck){
		if(!!this.props.activeNav.page){
			return this.props.activeNav.page.toLowerCase() === viewToCheck.toLowerCase()
		}
	}

	createItems(){
		return Object.keys(navOptions).map(group => {
			return <div key={group}>
				<li className="navGroupHeader">{group}<img src={atomLogo} /></li>
				<ul>
				{navOptions[group].map( (nav,i) => {
					return <NavItem 
						key={group + nav + i}
						group={group} 
						view={nav} 
						handleClick={this.props.changeView}
						isActive={this.checkActiveNav(nav)}
					/>
				})}
				</ul>
			</div> 
		})
	}

	render(){
		return (
			<section id="navigationContainer">
				<div className="navGroupsContainer">
					<ul className="nav-primaryGroup atoms" >
						{this.createItems()}
					</ul>
				</div>
			</section>
		)
	}
}