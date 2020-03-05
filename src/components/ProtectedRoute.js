import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useAuthContext } from '../context/auth-context'

const ProtectedRoute = ({ component, path }) => {
  const { loggedIn } = useAuthContext()
  return (
    loggedIn ? <Route component={component} path={path}/> : <Redirect to='/'/>
  )
}

export default ProtectedRoute
