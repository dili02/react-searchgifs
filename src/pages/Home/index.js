// ### DEPENDENCES ###
import React, {useCallback} from 'react'
import { useLocation } from 'wouter'

// ### COMPONENTS ###
import { RenderGifs, TrendingSearches, SearchForm } from 'components/'

export default function Home () {
   const [path, pushLocation] = useLocation()

   const handleSubmit = useCallback(({searchGifs}) => {
      pushLocation(`/search/${searchGifs}`)
   }, [pushLocation])

   return (
      <>
         <SearchForm onSubmit={handleSubmit} />
         <div className="App-main">
            <div className="App-results">
               <h3 className="App-title">Most Populars</h3>
               <RenderGifs searchGifs="most populars" />
            </div>
            <div className="App-category">
               <TrendingSearches />
            </div>
         </div>

      </>
   )
}
