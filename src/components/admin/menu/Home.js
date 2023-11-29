import React from 'react'
import Header from '../html/Header'
import Footer from '../html/Footer'
import LeftMenu from '../html/LeftMenu'
import { Link } from 'react-router-dom'
import UploadNames from './UploadName'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
    }
  }
  render() {
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
                        <h3>44</h3>

                        <p>จำนวณนักศึกษาที่เข้าเรียนแล้ว</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add"></i>
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-6 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>65</h3>

                        <p>จำนวณนักศึกษาที่ยังไม่เข้าเรียน</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add"></i>
                      </div>
                      <a href="#" className="small-box-footer">
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
                  <div className="col-lg-6 col-6">
                    <UploadNames/>
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
