import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

const Navbar = () => {
  const {loggedIn, setLoggedIn} = useAuthContext()
  return (
    <nav className="navbar">
      <Link className="btn" to="/">Home</Link>
      <button className="btn" onClick={() => setLoggedIn((login) => !login)}>{loggedIn?'Loguout':'Login'}</button>
    </nav>
  )
}

export default Navbar
