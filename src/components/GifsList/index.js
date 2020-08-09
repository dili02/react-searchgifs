// ### DEPENDENCES ###
import React, {useState, useEffect} from 'react'

// ### COMPONENTS ###
import { Gif } from '../index'

// ### STYLES ###
import './gifList.css'

import getGifs from 'services/getGifs'

export default function GifsList ({params}) {
   const {searchGifs} = params
   const [loading, setLoading]= useState(false)
   const [gifs, setGifs] = useState([])

   useEffect(() => {
      setLoading(true)
      getGifs({searchGifs})
      .then(gifs => {
         setGifs(gifs)
         setLoading(false)
      })
   }, [searchGifs])
   console.log(gifs)

   if (loading) return <h2>CARGANDO...</h2>

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
