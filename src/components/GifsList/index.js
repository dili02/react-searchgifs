// ### DEPENDENCES ###
import React from 'react'

// ### COMPONENTS ###
import { Gif } from '../index'

// ### STYLES ###
import './gifList.css'

export default function GifsList ({gifs}) {

	return (
		<div className = 'ListOfGifs'>
		  {
			gifs.map(({ id, title, url }) =>
				<Gif
               title = { title }
               url = { url }
               id = { id }
               key = { id }
				/>
			)
		  }
		</div>
	)
}
