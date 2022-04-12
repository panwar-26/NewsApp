
import './App.css';
import { Route, Routes } from "react-router";


import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
// import Newsitem from './components/Newsitem';
import News from './components/News';

const App = ()=>{
  const apiKey = process.env.REACT_APP_API_KEY;
  // apiKey = "123456";
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="general" />} />
            <Route path="/business" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="business" />} />
            <Route path="/entertainment" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="entertainment" />} />
            <Route path="/general" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="general" />} />
            <Route path="/health" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="health" />} />
            <Route path="/sports" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="sports" />} />
            <Route path="/science" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="science" />} />
            <Route path="/politics" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="politics" />} />
            <Route path="/technology" exact element={<News pageSize={6} apiKey={apiKey} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
}

export default App


