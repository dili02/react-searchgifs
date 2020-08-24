// ### DEPENDENCIES ###
import { useState, useEffect, useContext } from 'react'

// ### SERVICES ###
import getGifs from 'services/getGifs'

// ### CONTEXT ###
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({searchGifs, rating, language} = {searchGifs: null}) {
   const [loading, setLoading] = useState(false)
   const [loadingNextPage, setLoadingNextPage] = useState(false)
   const [page, setPage] = useState(INITIAL_PAGE)
   const {gifs, setGifs} = useContext(GifsContext)

   useEffect(() => {
      setLoading(true)
      //console.log({searchGifs, rating, language})
      getGifs({searchGifs, rating, language})
      .then(gifs => {
         setGifs(gifs)
         setLoading(false)
      })
   }, [searchGifs, setGifs, rating, language])

   useEffect(() => {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getGifs({searchGifs, page, rating, language})
      .then(nextGifs => {
         setGifs(prevGifs => prevGifs.concat(nextGifs))
         setLoadingNextPage(false)
      })
   }, [page, searchGifs, setGifs, rating, language])

   return {gifs, loading, setPage, loadingNextPage, language}
}
