import react, { useContext, useEffect } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Carousel  from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category'

import Routing from './Router'
import Product from './Components/Product/Product'
import { DataContext } from './Components/DataProvider/DataProvider'
import { Type } from './Utility/actiontype'
import { auth } from './Utility/firebase' 


function App() {

  const [{user}, dispatch] = useContext(DataContext)
    useEffect(()=>{
      auth.onAuthStateChanged((authUser) =>{
        if(authUser){
          // console.log(authUser);
          dispatch({
            type: Type.SET_USER,
            user: authUser
          });
        }else {

          dispatch({
            type: Type.SET_USER,
            user: null
          });
        }
      })

    },[])

  return (
    <>
    <Routing />
      {/* <Header />
      <Carousel />
      <Category />
      <Product /> */}

    </>
  )
}

export default App
