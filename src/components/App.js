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

  // useEffect(() => {
  //   fetch('http://localhost:3000/properties')
  //   .then((res)=> res.json())
  //   .then((data) => setProperties(data))
  // }, []);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'fa6efc7995msh7fb355158ac2eedp1c0285jsnee732276eec7',
  //       'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  //     }
  //   };
  //   fetch('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=200&offset=0&sort=relevance', options)
  //     .then(response => response.json())
  //     .then(response => {setProperties(response.properties); console.log(response)})
  // }, [])

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'fa6efc7995msh7fb355158ac2eedp1c0285jsnee732276eec7',
  //       'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
  //     }
  //   };

  //   fetch('https://real-estate12.p.rapidapi.com/listings/rent?state=NY&city=NYC&page=1&sort=newest&price_h=7000', options)
  //     .then(response => response.json())
  //     .then(response => {setProperties(response.properties);console.log(response.properties)})
      
  // }, [])
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
  const getFavorites = async () =>
  {
      const res = await fetch('http://localhost:3000/favorites')
      const data = await res.json()
      setFavorites(data)
}
getFavorites()
}, [currentPage, currentCity, sort])



  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home properties={properties}  setSort={setSort} getLocation={getLocation} showPosition={showPosition} currentPage={currentPage} setCurrentCity={setCurrentCity} setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState}/>}>
          </Route>
          <Route path="/list" element={<List/>}>
          </Route>
          <Route path="/favorites" element={<Favorites favorites={favorites}/>}>
          </Route>
        </Routes>
        <Footer/>
        
    </Router>
    </div>
  );}

export default App;
