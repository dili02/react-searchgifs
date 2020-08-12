// ### DEPENDENCES ###
import React, { useState } from 'react'
import { useLocation } from 'wouter'

// ### COMPONENTS ###
import { RenderGifs, TrendingSearches } from 'components/'

export default function Home () {
   const [searchGifs, setSearchGifs] = useState("")
   const [path, pushLocation] = useLocation()

   const handleSubmit = e => {
      e.preventDefault()
      pushLocation(`/search/${searchGifs}`)
   }

   const handleChange = e => {
      setSearchGifs(e.target.value)
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={searchGifs}
               onChange={handleChange}
               placeholder="Search a Gif Here!!!"
            />
         </form>

         <div className="App-main">
            <div className="App-results">
               <h3 className="App-title">Mas Populares</h3>
               <RenderGifs searchGifs="most populars" />
            </div>
            <div className="App-category">
               <TrendingSearches />
            </div>
         </div>

      </>
   )
}
