import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Harshit sharma' age = {18} img="img.avif"/>
      <Card user='Aman Singh' age={21} img="OIP.jpeg"/>
    </div> 
)
}

export default App
