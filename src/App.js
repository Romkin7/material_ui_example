import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Post from "./components/Post";

import { posts } from "./components/postsData";

const App = () => {
    
    return (
      <div className="App">
        <Router basename="/">
          <AppNavbar></AppNavbar>
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path={`/:id`} render={(props) => {return (<Post data={posts} {...props} />)}} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
}

export default App;
