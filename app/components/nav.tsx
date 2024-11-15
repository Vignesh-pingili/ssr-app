import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
          <div style={{height:"45px",backgroundColor:"gray",display:"flex",alignItems:"center"}}>
          <Link style={{color:"#FFF",textDecoration:"none",padding:"18px",fontSize:"18px"}} href="/">Home</Link>
          <Link style={{color:"#FFF",textDecoration:"none",padding:"18px",fontSize:"18px"}} href="/about">About</Link>
          <Link style={{color:"#FFF",textDecoration:"none",padding:"18px",fontSize:"18px"}} href="/contact">Contact</Link>
          <Link style={{color:"#FFF",textDecoration:"none",padding:"18px",fontSize:"18px"}} href="/services">Services</Link>
        </div>
  )
}

export default NavBar