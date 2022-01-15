import React from 'react'
import { Link } from 'react-router-dom'

const HomeRoute = () => {
  return (
    <div>
      <h1>React Tricks</h1>

      <p>This app contains common tricks I have picked up building React apps.</p>

      <p>
        Source code is hosted on GitHub here: 
        <a href='https://github.com/FindRobBrodie/tutorial-react-tricks'>https://github.com/FindRobBrodie/tutorial-react-tricks</a>
      </p>

      <p>
        You can find my videos here: 
        <a href='https://www.youtube.com/channel/UCYRMNDDcgS2cQZTOheR_6Ow'>https://www.youtube.com/channel/UCYRMNDDcgS2cQZTOheR_6Ow</a>
      </p>

      <Link to='debounce-hook'>Debounce hook</Link>
    </div>
  )
}

export default HomeRoute