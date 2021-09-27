import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Navbar =()=>{
    return (
    <>
       
       <nav className="navbar navbar-info">
      <div className="container-fluid">
      <NavLink exact activeClassName="active_class" to = '/'>Home</NavLink>
      <NavLink exact activeClassName="active_class" to ='/Leagues'>Leagues</NavLink>
      <NavLink exact activeClassName="active_class" to ='/About'>About</NavLink>
       <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn2 btn-outline-success" type="submit">Search</button>
       </form>
      </div>
   </nav>     
    </>
    );
};


export default Navbar;


             
            