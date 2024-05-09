import React from 'react'
import PropTypes from 'prop-types'
import  {Link}  from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">{props.title}</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link active"  to="/">Home</Link>
          </li>
          <li className="nav-item"> 
          <Link className="nav-link active"  to="/about">About</Link>
          </li>
                    
        </ul>

        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light' } mx-2`} htmlFor="flexSwitchCheckDefault">Enable dark mode </label>
        </div>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
    title : PropTypes.string
}

Navbar.defaultProps = {
    title : "Set title here"
}

