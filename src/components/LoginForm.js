import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { saveUser, loginUser } from '../client/client'
import {useAuthContext} from '../context/auth-context' 

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()
  
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const { handleSetToken } = useAuthContext()

  const formTitle = isLogin => isLogin ? 'Login' : 'Register'

  const toggleForm = () => {
    setIsLogin(isLogin => !isLogin)
  }
  
  const handleSubmit = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if (isLogin) {
      const token = await loginUser(email, password)
      handleSetToken(token)
      return history.push('/')
    }
    saveUser({ email, password })
  }

  return (
    <>
    <h1>{formTitle(isLogin)}</h1>
    <div className="login__form card">
      <form>
        <input className="login__input" type="email" ref={emailRef} placeholder="Enter email"/>
        <input className="login__input" type="password" ref={passwordRef} placeholder="Enter password"/>
        <button className="btn" type="button" onClick={toggleForm}>Switch to {formTitle(!isLogin)}</button>
        <button className="btn primary" type="button" onClick={handleSubmit}>{formTitle(isLogin)}</button>
      </form>
    </div>
    </>
  )
}