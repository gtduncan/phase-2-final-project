import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import '../App.css';
import getDistance from 'geolib/es/getDistance'
import Home from './Home.js'
import NavBar from './NavBar.js'
import List from './List';
import Footer from './Footer';
import Favorites from './Favorites';


const App = () => {
  const [properties, setProperties] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCity, setCurrentCity] = useState('New%20York%20City')
  const [currentState, setCurrentState] = useState('NY')
  const [sort, setSort] = useState('')
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  })

  const [favorites, setFavorites] = useState([])
  const [map, setMap] = useState({})

  

  const getFavorites = async () =>
  {
      const res = await fetch('http://localhost:3000/favorites')
      const data = await res.json()
      setFavorites(data)
}

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    setCoords({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

useEffect(() => { 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fa6efc7995msh7fb355158ac2eedp1c0285jsnee732276eec7',
      'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    const res = await fetch(`https://real-estate12.p.rapidapi.com/listings/sale?state=${currentState ? currentState : null}&city=${currentCity ? currentCity : null}&page=${currentPage}&sort=${sort}`, options)
    const data = await res.json()
    console.log(data)
    if(data['error']!=='No property found, please check your parameters and try again!')
    {
      setProperties(data.properties)
      const res2 = await fetch('http://localhost:3000/properties')
      const data2 = await res2.json()
      console.log("data2", data2)

      const res3 = await fetch('http://localhost:3000/properties', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([data.properties])
      })
      const data3 = await res3.json()
      console.log("data3",data3)
  }
  else
  {
    alert('No results found...')
  }
    }


  fetchData()
  getFavorites()
}, [currentPage, currentCity, sort, map])



  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home properties={properties}  setSort={setSort} getLocation={getLocation} showPosition={showPosition} currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentCity={setCurrentCity} currentState={currentState} setCurrentState={setCurrentState} getFavorites={getFavorites} setMap={setMap} map={map}/>}>
          </Route>
          <Route path="/list" element={<List/>}>
          </Route>
          <Route path="/favorites" element={<Favorites favorites={favorites} getFavorites={getFavorites}/>}>
          </Route>
        </Routes>
        <Footer/>
        
    </Router>
    </div>
  );}

export default App;
