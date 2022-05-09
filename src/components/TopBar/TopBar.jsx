import React from 'react'
import './TopBar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from '../../assets/images/profile.jpg'
import { Link } from 'react-router-dom'


function TopBar({user}) {

  return (
    <div className='topbar'>
        <div className="top-left">
            <i className="top-icon fa-brands fa-facebook-square"></i>
            <i className="top-icon fa-brands fa-instagram-square"></i>
            <i className="top-icon fa-brands fa-twitter-square"></i>
            <i className="top-icon fa-brands fa-pinterest-square"></i>
        </div>
        <div className="top-center">
            <ul className="top-list">
                <li className="top-list-item"><Link className="link" to="/">HOME</Link></li>
                <li className="top-list-item"><Link className="link" to="/">ABOUT</Link></li>
                <li className="top-list-item"><Link className="link" to="/">CONTACT</Link></li>

                {user ? <li className="top-list-item"><Link className="link" to="/write">WRITE</Link></li> : null}

                {user ? 
                
                <li className="top-list-item"><Link className="link" to="/">LOGOUT</Link></li> : 
                
                null }
            </ul>
        </div>
        <div className="top-right">
            {user ? <Link to="/settings"><img className='profile-image' src={Profile} alt="profile" /></Link> : <>
            <li className="top-list-item"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="top-list-item"><Link className="link" to="/register">REGISTER</Link></li> 
             </>}
            <i className="top-search-icon fa fa-search"></i>
        </div>
    </div>
  )
}

export default TopBar