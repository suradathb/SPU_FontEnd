import React from 'react'

class AdminRegister extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }

// ้handleRegister = () => {

// }

  render() {
    return (
      <>
        <div className="hold-transition register-page">
          <div className="register-box">
            <div className="register-logo">
              <a href="#">
                <b>Admin</b>ESANSOFT
              </a>
            </div>

            <div className="card">
              <div className="card-body register-card-body">
                <p className="login-box-msg">Register a new membership</p>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.handleRegister(this.state);
                }} method="post">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Retype password"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="terms"
                          value="agree"
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary btn-block">
                        Register
                      </button>
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                </form>

                <div className="social-auth-links text-center">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2"></i>
                    Sign up using Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2"></i>
                    Sign up using Google+
                  </a>
                </div>

                <a href="login.html" className="text-center">
                  I already have a membership
                </a>
              </div>
              {/* <!-- /.form-box --> */}
            </div>
            {/* <!-- /.card --> */}
          </div>
          {/* <!-- /.register-box --> */}
        </div>
      </>
    )
  }
}

export default AdminRegister
