/* #### DEPENDENCIES #### */
import React from 'react'
import { Link } from 'wouter'

// ### STYLES ###
import './Gif.css'

export default function Gif ({ id, title, url }) {
	return (

      <div className="Gif">
         <Link
            key={id}
            className="Gif-link"
            to={`/gif/${id}`}
         >
            <h4>{title}</h4>
            <img
               src={url}
               alt={title}
               loading="lazy"
            />
         </Link>
      </div>
	)
}
