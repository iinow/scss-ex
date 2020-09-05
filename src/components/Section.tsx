import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Section.scss'

const Section: React.FC = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">
          Create developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className="buttons">
          <Link to={'/'} className="btn btn-primary">
            Sign Up
          </Link>
          <Link to={'/'} className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Section
