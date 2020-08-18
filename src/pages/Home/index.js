// ### DEPENDENCES ###
import React, {useCallback} from 'react'
import { useLocation } from 'wouter'

// ### COMPONENTS ###
import { RenderGifs, TrendingSearches, SearchForm } from 'components/'

// ### SEO ###
import { Helmet } from 'react-helmet'

export default function Home () {
   const [path, pushLocation] = useLocation()

   const handleSubmit = useCallback(({searchGifs}) => {
      pushLocation(`/search/${searchGifs}`)
   }, [pushLocation])

   return (
      <>
         <Helmet>
            <title>Home || Search Giffs</title>
            <meta name="desctiption" content="Gif Searcher using API giphy.com" />
         </Helmet>
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
