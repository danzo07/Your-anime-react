import React from 'react'
import { Nav__Bar } from '../style.styled'

function NavBar() {
  return (
    <Nav__Bar>
      <div className='main__div'>
        <div className='left--div'>
          <p>Your anime</p>
        </div>
        <div className='right--div'> 
          <p>Favorite Anime</p>
        </div>
      </div>
    </Nav__Bar>
  )
}

export default NavBar