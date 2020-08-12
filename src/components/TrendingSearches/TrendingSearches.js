// ### DEPENDENCES ###
import React, {useState, useEffect} from 'react'

// ### SERVICES ###
import getTrendingGifs from 'services/getTrendingSearches'

// ### COMPONENTS ###
import {Category} from 'components/'

export default function TrendingSearches () {
   const [trends, setTrends] = useState([])

   useEffect(() => {
      getTrendingGifs().then(setTrends)
   }, [])

   return <Category options={trends} name="tendencias" />
}