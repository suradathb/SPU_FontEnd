import React from 'react'
import Header from '../html/Header'
import Footer from '../html/Footer'
import LeftMenu from '../html/LeftMenu'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UploadNames extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      fileUrl: null,
      realTimeData: [],
      newStudentName: '',
    }
  }

  componentDidMount() {
    this.fetchData()
    // Optionally, set up an interval to fetch data at regular intervals
    this.intervalId = setInterval(this.fetchData, 5000) // Fetch every 5 seconds, adjust as needed
    this.fetchAttendanceReport()
  }

  componentWillUnmount() {
    // Clean up the interval when the component unmounts
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/std/v1/generate-show/',
      ) // Update the URL if needed
      this.setState({ realTimeData: response.data })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  handleFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    })
  }

  handleUpload = async () => {
    try {
      const { file } = this.state
      if (!file) {
        console.error('Please select a file.')
        return
      }
      const formData = new FormData()
      formData.append('file', file)
      await axios.post(
        'http://localhost:8000/api/std/v1/upload-names/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      console.log('Names uploaded successfully!')
    } catch (error) {
      console.error('Error uploading names:', error)
    }
  }
  fetchAttendanceReport = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/std/v1/generate-attendance-report/',
      )

      // Assuming the response.data contains the file URL
      this.setState({ fileUrl: response.data })
    } catch (error) {
      console.error('Error fetching attendance report:', error)
    }
  }

  // Method to handle input change
  handleInputChange = (event) => {
    this.setState({ newStudentName: event.target.value })
  }

  // Method to add a new student
  addNewStudent = async () => {
    try {
      const { newStudentName } = this.state
      if (!newStudentName) {
        console.error('List of names is empty')
        return
      }
      // Make a POST request to the API endpoint
      const response = await axios.post(
        `http://localhost:8000/api/std/v1/add-new-student/?name=${newStudentName}`,
      )
      // Handle the response
      console.log(response.data.message)
      // You can perform additional actions after adding a new student if needed

      // Clear the input field after successful addition
      this.setState({ newStudentName: '' })
      window.location.reload()
    } catch (error) {
      // Handle errors
      console.error('Error adding new student:', error.message)
    }
  }

  render() {
    const { realTimeData, newStudentName, fileUrl } = this.state
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
                    <h1 className="m-0">Setup Data</h1>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/config">Setup</Link>
                      </li>
                      <li className="breadcrumb-item active">Setup Data</li>
                    </ol>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- /.content-header --> */}
            {/* <!-- Main content --> */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card card-secondary">
                        <div className="card-header">
                          <h3 className="card-title">
                            Upload and download report
                          </h3>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-3 col-6">
                              <span className="btn btn-success col fileinput-button">
                                <input
                                  type="file"
                                  onChange={this.handleFileChange}
                                />
                              </span>
                            </div>
                            <div className="col-lg-3 col-6">
                              <button
                                onClick={this.handleUpload}
                                className="btn btn-primary col start"
                              >
                                <i className="fas fa-upload"></i>
                                <span>Upload Names</span>
                              </button>
                            </div>
                            <div className="col-lg-3 col-6">
                              <button
                                className="btn btn-warning col cancel"
                                onClick={this.fetchAttendanceReport}
                              >
                                Fetch Attendance Report
                              </button>
                            </div>
                            <div className="">
                              {fileUrl && (
                                <div>
                                  <p></p>
                                  <a href={fileUrl} download>
                                    Download
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-group input-group-sm col-lg-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder='ระบุชื่อ-นามสกุล โดยไม่มีคำนำหน้า เช่น "สวัสดี มีชัย"'
                              value={newStudentName}
                              onChange={this.handleInputChange}
                            />
                            <span className="input-group-append">
                              <button
                                type="button"
                                onClick={this.addNewStudent}
                                className="btn btn-info btn-flat"
                              >
                                <i className="fas fa-search"> </i>
                                เพิ่มนักศึกษาเข้าระบบ
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.card-header --> */}
                      <div className="card-body">
                        <table
                          id="example2"
                          className="table table-bordered table-hover"
                        >
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Full-Name</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {realTimeData.map(
                              (data, index) =>
                                data.name !== '' && (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.status}</td>
                                  </tr>
                                ),
                            )}
                          </tbody>
                        </table>
                      </div>
                      {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default UploadNames
