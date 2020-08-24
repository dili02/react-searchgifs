// ### DEPENDENCES ###
import React from 'react'

// ### COMPONENTS ###
import { RenderGifs, TrendingSearches, SearchForm } from 'components/'

// ### SEO ###
import { Helmet } from 'react-helmet'

export default function Home () {

   return (
      <>
         <Helmet>
            <title>Home || Search Giffs</title>
            <meta name="desctiption" content="Gif Searcher using API giphy.com" />
         </Helmet>
         <SearchForm />
         <div className="App-main">
            <div className="App-results">
               <h3 className="App-title">Most Populars</h3>
               <RenderGifs searchGifs="most populars" rating="g" language="es" />
            </div>
            <div className="App-category">
               <TrendingSearches />
            </div>
         </div>

      </>
   )
}
