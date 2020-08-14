// ## DEPENDENCES ##
import React, {useState} from 'react'

export default function SearchForm ({onSubmit}) {
   const [searchGifs, setSearchGifs] = useState("")

   const handleSubmit = e => {
      e.preventDefault()
      onSubmit({searchGifs})
   }

   const handleChange = e => {
      setSearchGifs(e.target.value)
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={searchGifs}
            onChange={handleChange}
            placeholder="Search a Gif Here!!!"
         />
         <button>
            SEARCH
         </button>
      </form>
   )
}
