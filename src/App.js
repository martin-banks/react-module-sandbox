import React, { Component } from 'react'
import './App.css'
import Title from './modules/atoms/text/Title'
import Navigation from './ui/navigation/Navigation'
import {viewController} from './ui/_viewController'
import AtomsText from './ui/views/AtomsText'


class App extends Component {
	constructor(props){
		super(props)
		this.changeView = this.changeView.bind(this)
		this.setView = this.setView.bind(this)

		this.state = {
			activeView: {
				group: null,
				view: null
			},
			activeNav: {
				section: null,
				page: null
			},
		}
	}
	changeView(e){
		let activeView = {
			group: e.target.getAttribute('data-group').toLowerCase(),
			view: e.target.getAttribute('data-view').toLowerCase()
		}
		let activeNav = {
			activeNavsection: e.target.getAttribute('data-group').toLowerCase(),
			page: e.target.getAttribute('data-view').toLowerCase()
		}
		this.setState({activeView: activeView})
		this.setState({activeNav:activeNav})
		//e.target.setAttribute('data-active', 'true')
	}

	setView(){
		let view = this.state.activeView.view
		let group = this.state.activeView.group
		if (!!view && !!group){
			if(!!viewController[group][view]){
				return viewController[group][view].template
			} else {
				return 'View template missing'
			}
		} else {
			return 'No view set'
		}		
	}



  render() {
    return (
      <div className="App">
        <Navigation
        	changeView={this.changeView}
					activeNav={this.state.activeNav}
        />
        <div id="viewContainer">
	        {this.setView()}
        </div>
      </div>
    )
  }
}

export default App
