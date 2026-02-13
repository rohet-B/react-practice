import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{padding:"2px",backgroundColor:"lightblue",display:"flex",gap:"25px",justifyContent:"center"}}>
      {/* Before <Link> */}
      {/* <a href="/">HOME</a>
      <a href="/about">ABOUT</a>
      <a href="/contact">CONTACT</a> */}

      {/* After <Link> */}
      {/* <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/contact'>CONTACT</Link> */}

      {/* Suppose you are already on the Home page. */}
      {/* You want the Home link to look different (active) so the user knows “I am here now”. */}
      {/* NavLink does this automatically by adding an "active" class */}
        <NavLink className={(e)=>{return e.isActive?"bg-slate-700":""}} to='/'>HOME</NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-slate-700":""}} to='/about'>ABOUT</NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-slate-700":""}} to='/contact'>CONTACT</NavLink>
    </div>
  )
}

export default Navbar