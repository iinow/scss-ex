import React from 'react'
import { User } from '../mock'
import { Link } from 'react-router-dom'

const Profiles: React.FC = () => {
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Developers</h1>
        <p className="lead">
          <i className="fas fa-connectdevelop" />
          Browse and connect with developers
        </p>
        <div className="profiles">
          <div className="profile bg-light">
            <img
              className="round-img"
              src="https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png"
            />

            <div>
              <h2>{User.profiles.name}</h2>
              <p>{User.profiles.company}</p>
              <p>{User.profiles.location}</p>
              <Link to="/profile" className="btn btn-primary">
                View Profile
              </Link>
            </div>

            <ul>
              {User.provinces.map((province, index) => (
                <li className="text-primary" key={index}>
                  <i className="fas fa-check" />
                  {province}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profiles
