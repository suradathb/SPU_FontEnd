import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeAdmin from './components/admin/menu/Home'
import AdminLogin from './components/admin/auth/AdminLogin'
import AdminRegister from './components/admin/auth/AdminRegister'
import ForgotPassword from './components/admin/auth/ForgotPassword'
import RecoverPassword from './components/admin/auth/RecoverPassword'
import Error404 from './components/admin/errors/Error404'
import Error500 from './components/admin/errors/Error500'
import Profile from './components/admin/profile/Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomeAdmin/>} />
          <Route path='/login' element={<AdminLogin/>}/>
          <Route path='/register' element={<AdminRegister/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/recover' element={<RecoverPassword/>}/>
          <Route path='/error404' element={<Error404/>}/>
          <Route path='/error500' element={<Error500/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </>
    )
  }
}

export default App
