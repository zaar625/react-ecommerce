import React from 'react'

import { BrowserRouter,} from 'react-router-dom'
import Routers from '../routes/Routes'


import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

const Layout = () => {
  return (
  <BrowserRouter>
    <div>
      <Header></Header>
      <div className='container'>
        <div className='main'>
          <Routers></Routers>
        </div>
      </div>
      <Footer></Footer>
      <ProductViewModal/>
    </div>
  </BrowserRouter>
  )
}

export default Layout