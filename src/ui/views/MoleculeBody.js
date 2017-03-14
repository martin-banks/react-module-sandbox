import React from 'react'
import {sampleText} from '../../sampleContent/text'
/* styles */
import style from '../../App.css'

/* UI elements */
import PreviewContainer from '../viewModules/PreviewContainer'

/* modules */
import BodyContent from '../../modules/molecules/BodyText'



const bodyContent = [
	{
		type: 'BodyText',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Crosshead',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'BodyText',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'ListText',
		style: 'number',
		content: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		]
	}

]


export default class MoleculeHeaderText extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = {
			modules: {
				"Body Text": <BodyContent content={bodyContent}/>
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

