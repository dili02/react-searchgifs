// #### DEPENDENCES ####
import React, {useContext} from 'react'

// #### CUSTOM HOOKS ####
//import useGifsContext from 'hooks/useGifsContext'
import GifsContext from 'context/GifsContext'

// #### COMPONENTS ####
import {Gif} from 'components/'

export default function Detail ({params}) {
   /* const {gifs} = useGifsContext()*/
   const {gifs} = useContext(GifsContext)

   const {id, title, url} = gifs.find(gif =>
      gif.id === params.id
   )

   return <Gif title={title} id={id} url={url} />
}
