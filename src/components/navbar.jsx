import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
    <Link to='/'>shop</Link>
    <Link to='/cart'>cart</Link>
    
    </div>
    
  )
}
