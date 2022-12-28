import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer.js/Footer'
import Routers from '../../routers/router'

function Layout() {
    return (
    <>
    <Header/>
   <div>
     
   <Routers/>
     
   </div>
   
  
  <Footer/>
    </>
   
    )
}

export default Layout
