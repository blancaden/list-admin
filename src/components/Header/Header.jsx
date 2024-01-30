import React from 'react'
import './Header.css'

const Header = ({ isLogoutVisible  }) => {
  return (
    <>

   <header>
        <section className="nav-bar">

            <figure className="img-content">
             
                <img src="img/logo-ico.ico" alt="" />
            </figure>

            <nav className="nav-content">
            {isLogoutVisible && (
              <button className="btn-log" id="logoutButton" type="button">
                Logout
              </button>
            )}
          </nav>
            
        </section>
    </header>


    </>
  )
}

export default Header;