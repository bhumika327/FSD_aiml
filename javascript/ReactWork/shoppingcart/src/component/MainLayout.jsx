import React from 'react'
import{Link} from'react-router-dom'

function MainLayout() {
  return (
  <div>
  <nav style={{ display: "flex", gap: "30px", fontSize: "18px", color: "red" }}>
    <Link to="/login" style={{ color: "red", fontSize:"30px" }}>
      Login
    </Link>
    <Link to="/registration" style={{ color: "green",  fontSize:"30px" }}>
      Registration
    </Link>
  </nav>
</div>

  )
}

export default MainLayout