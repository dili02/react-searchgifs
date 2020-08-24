/* ## DEPENDENCIES ## */
import React from 'react';
import { Route, Link } from 'wouter'

// ## CONTEXT ##
import { GifsContextProvider } from 'context/GifsContext'

// ## PAGES ##
import {Home, SearchResults, Detail} from './pages'

// #### STYLES ####
import './App.css';

function App () {

   return (
      <div className="App">
         <section className="App-content">

            <Link to="/">
               <h1 style={{marginTop: 0, textAlign: 'center'}}>
                  <span role="img" aria-labelledby="🔎">
                     { } 🔎
                  </span>
                  SEARCH's GIFFS
               </h1>
            </Link>

            <GifsContextProvider>
               <Route
                  component={Home}
                  path="/"
               />

                <Route
                  component={SearchResults}
                  path='/search/:searchGifs/:rating?/:language?'
               />

               <Route
                  component={Detail}
                  path="/gif/:id"
               />

               <Route
                  component={() => <h2>404 ERROR</h2>}
                  path="/404"
               />
            </GifsContextProvider>

         </section>
      </div>
   );

}

export default App;
