import React from 'react'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
      <nav>
       <div className="navAlign">
         <div className="title">
        <h2 id="home">Where in the world ?</h2>
      </div>

      <div className="dark">
        <p className="darkmode">Dark mode</p>
      </div>

     </div>
    </nav>
  )
}

export default Navbar
