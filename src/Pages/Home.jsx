import React, { useEffect } from 'react'
import Hero from '../Components/Hero'


const Home = () => {
  useEffect (() =>{
    document.title = 'Home || Page'
  })

  return (
    <div className='container'>
      <Hero/>
      
    
    </div>
  )
}

export default Home