import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="card-container">
        <Card user='tanya' img='https://images.unsplash.com/photo-1771607508638-0e9f4bfc02d7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0' />
        <Card user='vidit' img='https://plus.unsplash.com/premium_photo-1674764004244-ba8abc6bcf48?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0' />
        <Card user='satyarth' img='https://images.unsplash.com/photo-1772135439554-84750d4e71b5?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>

    </div>
  )
}

export default App