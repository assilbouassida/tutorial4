import { useState } from 'react'

import Card from './components/Card'
import Header from './components/Header'
import {info} from "./components/info.jsx"
import React,{Component} from "react";

class App extends Component  {
  render(){

  return (
    <>
      <div className='Container'>
        <Header/>
      
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
      
      {info.map((champion) => (<Card key={champion.id} champion={champion} /> ))}
    
      </div>
      </div>
    </>
    
  )
}
}

export default App;
