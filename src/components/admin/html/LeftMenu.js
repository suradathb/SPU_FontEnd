import React from 'react'
import { Link } from "react-router-dom";

class LeftMenu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
		}
	}

	render() {
		return (
			<>
				{/* <!-- Main Sidebar Container --> */}
				<aside className="main-sidebar sidebar-dark-primary elevation-4">
					{/* <!-- Brand Logo --> */}
					<Link to="/" className="brand-link">
						<img
							src="./assets/dist/img/AdminLTELogo.png"
							alt="AdminLTE Logo"
							className="brand-image img-circle elevation-3"
						/>
						<span className="brand-text font-weight-light">SPU Class Rooms</span>
					</Link>

					{/* <!-- Sidebar --> */}
					<div className="sidebar">
						{/* <!-- Sidebar user panel (optional) --> */}
						<div className="user-panel mt-3 pb-3 mb-3 d-flex">
							<div className="image">
								<img
									src="./assets/dist/img/user2-160x160.jpg"
									className="img-circle elevation-2"
									alt="User Image"
								/>
							</div>
							<div className="info">
								<Link to="/profile" className="d-block">
									Suradath Bangnikrai
								</Link>
							</div>
						</div>

						{/* <!-- SidebarSearch Form --> */}
						<div className="form-inline">
							<div className="input-group" data-widget="sidebar-search">
								<input
									className="form-control form-control-sidebar"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<div className="input-group-append">
									<button className="btn btn-sidebar">
										<i className="fas fa-search fa-fw"></i>
									</button>
								</div>
							</div>
						</div>

						{/* <!-- Sidebar Menu --> */}
						<nav className="mt-2">
							<ul
								className="nav nav-pills nav-sidebar flex-column"
								data-widget="treeview"
								role="menu"
								data-accordion="false"
							>
								{/* <!-- Add icons to the links using the .nav-icon className
							 with font-awesome or any other icon font library --> */}
								<li className="nav-item menu-open">
									<Link to="/" className="nav-link active">
										<i className="nav-icon fas fa-tachometer-alt"></i>
										<p>
										Record of attendance
											{/* <i className="right fas fa-angle-left"></i> */}
										</p>
									</Link>
									{/* <ul className="nav nav-treeview">
										<li className="nav-item">
											<a href="#" className="nav-link active">
												<i className="far fa-circle nav-icon"></i>
												<p>Dashboard v1</p>
											</a>
										</li>
										<li className="nav-item">
											<a href="#" className="nav-link">
												<i className="far fa-circle nav-icon"></i>
												<p>Dashboard v2</p>
											</a>
										</li>
										<li className="nav-item">
											<a href="#" className="nav-link">
												<i className="far fa-circle nav-icon"></i>
												<p>Dashboard v3</p>
											</a>
										</li>
									</ul> */}
								</li>
							</ul>
						</nav>
						{/* <!-- /.sidebar-menu --> */}
					</div>
					{/* <!-- /.sidebar --> */}
				</aside>
			</>
		)
	}
}

export default LeftMenu
