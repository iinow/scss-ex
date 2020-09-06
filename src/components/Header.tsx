import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header as ConfigHeader } from '../config'
import '../scss/Header.scss'

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={'/'}>
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        {ConfigHeader.HeaderMenus.map((menu, index) => (
          <li key={index}>
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
