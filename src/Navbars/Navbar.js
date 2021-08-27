import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink} from 'react-router-dom'



const Navbar = () => {

 

  return (
    <div>
    
      <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark" style={{opacity:0.9}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
       <h3><b><span className="badge" style={{borderRadius:'5px',boxShadow:'7px 7px 7px black',backgroundColor:'rgb(230,235,230)'}}><span style={{color:'#4285F4'}}>C</span><span style={{color:'#EA4335'}}>-</span><span style={{color:'#FBBC05'}}>m</span><span style={{color:'#4285F4'}}>a</span><span style={{color:'#34A853'}}>w</span><span style={{color:'#EA4335'}}>g</span></span></b></h3>
    </NavLink>
    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="badge" style={{borderRadius:'5px',boxShadow:'7px 7px 7px black'}}><span class="material-icons" style={{color:'white'}}>
menu
</span>
</span>
    </button>
   
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav mb-2 mb-lg-0 pos">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" >About me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar
