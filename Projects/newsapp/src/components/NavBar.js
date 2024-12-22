import React from 'react'
//import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const NavBar=(props)=>{   
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">              
              {
                props.menu_urls.map((category)=>{
                return <li className="nav-item" key={category}><Link className="nav-link" to={"/"+category}>{category[0].toUpperCase()+category.substr(1)}</Link></li>        
              })}
            </ul>     
          </div>
        </div>
      </nav>
    </div>
  )  
}
//<li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
export default NavBar;


