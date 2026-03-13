// import React, { useState } from "react";
// import { Routes, Route, NavLink } from "react-router-dom";

// import APICaling from "./Components/APICaling";
// import FormHandling from "./Components/FormHandling";
// import LocalStorage from "./Components/LocalStorage";
// import UseEffect from "./Components/UseEffect";
// import UseState from "./Components/UseState";
// import Navbar from "./Components/Navbar";

// const App = () => {

//   return (
//    <div>
//     <Navbar />
//     <Routes>
//       <Route path="/APICalling" element={<APICaling />} />
//       <Route path="/FormHandling" element={<FormHandling />} />
//       <Route path="/LocalStorage/:id" element={<LocalStorage />} />
//       <Route path="/UseEffect" element={<UseEffect />} />
//       <Route path="/UseState" element={<UseState />} />
//       <Route path="*" element={<h1 className="text-center mt-10 text-3xl text-red-500">404 - Page Not Found</h1>} />
//     </Routes>
//    </div> 
//   )
// };

// export default App;

import React from 'react'
import Basics from './Components/Basics'

const App = () => {
  return (
    <div>
      <Basics />
    </div>
  )
}

export default App