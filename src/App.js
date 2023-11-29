import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeAdmin from './components/admin/menu/Home'
import UploadNames from './components/admin/menu/UploadName'
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
          <Route path='/config' element={<UploadNames/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </>
    )
  }
}

export default App
