import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'
import RoutesFront from "./routes/RoutesFront";

const App = () => {
  return (
   <>
   <Router>
    <RoutesFront />
   </Router>
   </>
  )
}

export default App
