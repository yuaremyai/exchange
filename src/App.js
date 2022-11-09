import React, { useEffect, useState } from 'react'
import './App.module.css'
import ExchangeComponent from './components/ExchangeComponent'
import Header from './components/header/Header'

function App() {
  const [USDdata, setUSDData] = useState([])
  const [EURdata, setEURData] = useState([])


  useEffect( () => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
    .then(jsonData => {
      setUSDData(jsonData[0])
      setEURData(jsonData[1])
    })
  }, [])

  return (
    <div className="App">
      <Header USD = {USDdata} EUR = {EURdata}/>
      <ExchangeComponent USD = {USDdata} EUR = {EURdata}/>
    </div>
  )
}

export default App;
