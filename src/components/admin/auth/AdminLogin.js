import React from 'react'
import { Link } from 'react-router-dom'

class AdminLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = () => {
   var usernametest = 'admin@info.com'
   var passwordtest = 'password@1'
    if(this.state.email === usernametest && this.state.password === passwordtest)
    {
      window.location.href = '/';
    }else{
      window.location.reload();
    }
    
  }
  render() {
    return (
      <>
        <div className="hold-transition login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="#">
                <b>Admin</b>ESANSOFT
              </a>
            </div>
            {/* <!-- /.login-logo --> */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.handleLogin(this.state);
                }} method="post">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email or usernames"
                      value={this.state.email}
                      onChange={(e) => this.setState({email: e.target.value})}
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
                      value={this.state.password}
                      onChange={(e) => this.setState({password: e.target.value})}
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
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign In
                      </button>
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                </form>

                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2"></i> Sign in using
                    Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2"></i> Sign in using
                    Google+
                  </a>
                </div>
                {/* <!-- /.social-auth-links --> */}

                <p className="mb-1">
                  <Link to="/forgot">I forgot my password</Link>
                </p>
                <p className="mb-0">
                  <Link to="/register" className="text-center">
                    Register a new membership
                  </Link>
                </p>
              </div>
              {/* <!-- /.login-card-body --> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AdminLogin
