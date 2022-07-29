import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import '../App.css';
import Home from './Home.js'
import Nav from './Nav.js'

const App = () => {
  const [properties, setProperties] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3000/properties')
  //   .then((res)=> res.json())
  //   .then((data) => setProperties(data))
  // }, []);

  useEffect(() => {

    const request = async () => {
      let req = await fetch('http://localhost:3000/properties')
      let res = await req.json()
      console.log(res)
      setProperties(res)
    }
    request()
  },[])
  
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Home properties={properties}/>}>
          </Route>
          <Route path="/listing">
          </Route>
          <Route path="/list">
          </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
