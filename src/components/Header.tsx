import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Header.scss'

const Header: React.FC = () => {
  const [menus, setMenus] = useState(new Array<string>())

  useEffect(() => {
    setMenus(['Developers', 'Register', 'Developers'])
  }, [])

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={'/'}>
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>
            <Link to={'/'}>
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
