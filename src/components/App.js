import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import '../App.css';
import Home from './Home.js'
import NavBar from './NavBar.js'
import List from './List';

const App = () => {
  const [properties, setProperties] = useState([])
  const [currentPage, setCurrentPage] = useState([1])

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

  fetch(`https://real-estate12.p.rapidapi.com/listings/sale?state=NY&city=New%20York%20City&page=${currentPage}&sort=rele`, options)
    .then(response => response.json())
    .then(response => {setProperties(response.properties); console.log(response)})

}, [])

  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home properties={properties} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}>
          </Route>
          <Route path="/listing">
          </Route>
          <Route path="/list" element={<List/>}>
          </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
