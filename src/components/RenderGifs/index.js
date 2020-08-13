// ### DEPENDENCES ###
import React, {useRef, useEffect, useCallback} from 'react'
import debounce from 'just-debounce-it'
import { useLocation } from 'wouter'

// ### HOOKS ###
import {useGifs} from 'hooks/useGifs'
import useLazyLoad from 'hooks/useLazyLoad'

// ### COMPONENTS ###
import { GifsList, Spinner } from 'components/'

export default function RenderGifs ({searchGifs}) {
   const {loading, gifs, setPage} = useGifs({searchGifs})
   const externalRef= useRef()
   const {isNearScreen} = useLazyLoad({
      externalRef: loading ? null : externalRef,
      toogleIsVisible: false
   })
   const location = useLocation()

   let isHomePage
   if (location[0] === '/') {
      isHomePage = true
   } else {
      isHomePage = false
   }

   const handlePagination = () => setPage(prevPage => prevPage + 1)

   const debounceHandleNextPage = useCallback(debounce(
      () => setPage(prevPage => prevPage + 1), 200
   ), [setPage])

   useEffect(() => {
      if (isNearScreen) debounceHandleNextPage()
   }, [isNearScreen, debounceHandleNextPage])

   return (
      <>
         {
            loading
            ? <Spinner />
            : <GifsList gifs={gifs} />
         }
         {
            isHomePage
            ? <button onClick={handlePagination}>
               GET MORE GIFFS
            </button>
            : <div id="visor" ref={externalRef}></div>
         }
      </>
   )
}
