// ### DEPENDENCES ###
import React from 'react'
import {Link} from 'wouter'

// ### STYLES ###
import "./styles.css"

export default function Category ({name, options=[]}) {
   return (
      <div className="Category">
         <h3 className="Category-title">{name}</h3>
         <ul className="Category-list">
            {
               options.map((option) => (
                  <li key={option}>
                     <Link
                        className="Category-link"
                        to={`/search/${option}`}
                     >
                        {option}
                     </Link>
                  </li>
               ))
            }
         </ul>
      </div>
   )
}
