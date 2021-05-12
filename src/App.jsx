import React from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error'


function App() {
  return (
    <React.Fragment> 
     <Switch>
       <Route exact path="/" render={props=>(
         <React.Fragment>
           <Navbar/>
           <Homepage/>
           <About/>
           <Contact/>
         </React.Fragment>
       )}/>
       <Route exact component={Error}/>
     </Switch>
    </React.Fragment>
  );
}

export default App;
