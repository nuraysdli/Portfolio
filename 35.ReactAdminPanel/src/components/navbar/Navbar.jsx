import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import Wrapper from '../wrapper/Wrapper'

const Navbar = () => {
  return (
    <div className='navbar container' style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Logo/>
        <Navlist/>
        <Wrapper/>
    </div>
  )
}

export default Navbar