import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import CalendarPage from './pages/CalendarPage'
import './styles/index.css'
import MeetingPage from './pages/MeetingPage'
import { AuthProvider } from './context/auth-context'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

const App = () => (
  <Router>
    <AuthProvider>
      <div className="app">
        <div className="app__container">
          <Navbar/>
          <Switch>
            <ProtectedRoute path="/meetings/:id" component={MeetingPage}/>
            <Route path="/" component={CalendarPage}/>
          </Switch>
        </div>
      </div>
    </AuthProvider>
  </Router>
)

export default App
