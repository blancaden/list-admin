import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>

   <header>
        <section className="nav-bar">

            <figure className="img-content">
             
                <img src="img/logo-ico.ico" alt="" />
            </figure>

            <nav className="nav-content">
                <button className="btn-log" id="logoutButton" type="button">Logout</button> 
            </nav>
            
        </section>
    </header>


    </>
  )
}

export default Header;