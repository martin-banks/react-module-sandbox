import React from 'react'
import {sampleText} from '../../sampleContent/text'
/* styles */
import style from '../../App.css'

/* UI elements */
import PreviewContainer from '../viewModules/PreviewContainer'

/* modules */
import HeaderText from '../../modules/molecules/HeaderText'


export default class MoleculeHeaderText extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = {
			modules: {
				"Header Text": <HeaderText />
			}
			
		}
	}

	createPreviews(){
		return Object.keys(this.state.modules)
			.map( module => <PreviewContainer
				key={'preview-' + module}
				type={module}
				component={this.state.modules[module]}
			/>
		)
	}

	render(){
		return (
			<section className={style.moduleTextView}>
				{this.createPreviews()}
			</section>
		)
	}

}

