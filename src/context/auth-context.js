import React, {useState, useContext} from 'react'

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    console.log('Context must be inside a Provider')
    return {}
  }
  return context
}

