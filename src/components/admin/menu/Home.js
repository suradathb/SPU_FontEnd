import React from 'react'
import Header from '../html/Header'
import Footer from '../html/Footer'
import LeftMenu from '../html/LeftMenu'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      notEnrolledStudents: [],
      notEnrolledCount: 0,
      attendedEnrolledCount: 0,
      attendedEnrolledStudents: 0,
      names: [], // Input names for checking attendance
      attendanceResult: null,
      showTableNot: false,
      showTable: false,
    }
  }
  componentDidMount() {
    this.fetchNotEnrolledNames()
    this.fetchNotEnrolledCount()
    this.fetchAttendedEnrolledStudents()
    this.fetchAttendedEnrolledCount()
  }

  fetchNotEnrolledNames = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/std/v1/not-enrolled-names/',
      )
      // Assuming the response.data contains the not enrolled students array
      this.setState({
        notEnrolledStudents: response.data.not_enrolled_students,
      })
    } catch (error) {
      console.error('Error fetching not enrolled names:', error)
    }
  }

  fetchNotEnrolledCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/std/v1/not-enrolled-names/',
      )
      // Assuming the response.data contains the not enrolled students count
      this.setState({
        notEnrolledCount: response.data.not_enrolled_students.length,
      })
    } catch (error) {
      console.error('Error fetching not enrolled count:', error)
    }
  }

  fetchAttendedEnrolledStudents = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/std/v1/attended-names/',
      )
      // Assuming the response.data contains the not enrolled students array
      this.setState({
        attendedEnrolledStudents: response.data.attended_students,
      })
    } catch (error) {
      console.error('Error fetching not enrolled names:', error)
    }
  }

  fetchAttendedEnrolledCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/std/v1/attended-names/',
      )
      // Assuming the response.data contains the not enrolled students count
      this.setState({
        attendedEnrolledCount: response.data.attended_students.length,
      })
    } catch (error) {
      console.error('Error fetching not enrolled count:', error)
    }
  }

  handleInputChange = (event) => {
    this.setState({
      names: event.target.value,
    })
  }
  handleCheckAttendance = async () => {
    try {
      const { names } = this.state
      if (!names) {
        console.error('List of names is empty')
        return
      }
      const namesArray = names.split(',').map((name) => name.trim())

      if (namesArray.length === 0) {
        console.error('List of names is empty')
        return
      }

      const response = await axios.post(
        'http://localhost:8000/api/std/v1/check-attendance/',
        namesArray,
      )
      this.setState({ attendanceResult: response.data.attendance_result })
      window.location.reload()
    } catch (error) {
      console.error('Error checking attendance:', error)
    }
  }

  handleButtonClickNot = () => {
    this.setState((prevState) => ({
      showTable: !prevState.showTable,
      showTableNot: false,
    }))
  }
  handleButtonClick = () => {
    this.setState((prevState) => ({
      showTableNot: !prevState.showTableNot,
      showTable: false,
    }))
  }
  render() {
    const {
      notEnrolledStudents,
      notEnrolledCount,
      attendedEnrolledCount,
      attendedEnrolledStudents,
      names,
      attendanceResult,
    } = this.state
    return (
      <>
        <div className="wrapper">
          <Header />
          <LeftMenu />
          <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Record of attendance</h1>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/">Record of attendance</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Record of attendance
                      </li>
                    </ol>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  {/* <!-- ./col --> */}
                  <div className="col-lg-6 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        {attendedEnrolledCount > 0 && (
                          <h3>{attendedEnrolledCount}</h3>
                        )}

                        <p>จำนวณนักศึกษาที่เข้าเรียนแล้ว</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add"></i>
                      </div>
                      <a
                        href="#"
                        onClick={this.handleButtonClick}
                        className="small-box-footer"
                      >
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-6 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        {notEnrolledCount > 0 && <h3>{notEnrolledCount}</h3>}
                        <p>จำนวณนักศึกษาที่ยังไม่เข้าเรียน</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add"></i>
                      </div>
                      <a
                        href="#"
                        onClick={this.handleButtonClickNot}
                        className="small-box-footer"
                      >
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder='ระบุชื่อ-นามสกุล โดยไม่มีคำนำหน้า เช่น "สวัสดี มีชัย"'
                        value={names}
                        onChange={this.handleInputChange}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          onClick={this.handleCheckAttendance}
                          className="btn btn-info btn-flat"
                        >
                          <i className="fas fa-search"> </i>
                          นักศึกษาลงชื่อเข้าเรียน !
                        </button>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="col-md-12">
                    {this.state.showTable && (
                      <table
                        id="example2"
                        className="table table-bordered table-hover"
                      >
                        {/* Your table content goes here */}
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Full-Name</th>
                            <th>Status</th>
                            {/* Add more headers as needed */}
                          </tr>
                        </thead>
                        <tbody>
                          {notEnrolledStudents.map(
                            (stddata, index) =>
                              stddata.name !== '' && (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{stddata.name}</td>
                                  <td>{stddata.status}</td>
                                  {/* Add more data rows as needed */}
                                </tr>
                              ),
                          )}
                        </tbody>
                      </table>
                    )}
                  </div>
                  <br />
                  <div className="col-md-12">
                    {this.state.showTableNot && (
                      <table
                        id="example2"
                        className="table table-bordered table-hover"
                      >
                        {/* Your table content goes here */}
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Full-Name</th>
                            <th>Status</th>
                            {/* Add more headers as needed */}
                          </tr>
                        </thead>
                        <tbody>
                          {attendedEnrolledStudents.map(
                            (stddatanot, index) =>
                              stddatanot.name !== '' && (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{stddatanot.name}</td>
                                  <td>{stddatanot.status}</td>
                                  {/* Add more data rows as needed */}
                                </tr>
                              ),
                          )}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /.content-header --> */}
          </div>
          <Footer />
        </div>
        {/* <!-- ./wrapper --> */}
      </>
    )
  }
}

export default Home
