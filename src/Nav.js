import React from 'react'
import"./Nav.css"

function Nav() {
  return (
    <div className='nav'>
        <div className='nav__contents'></div>
        <img className='nav__logo' src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=500' alt=''/>
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?w=100'/>
    </div>
  ) 
}

export default Nav