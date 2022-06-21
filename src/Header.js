import logo from './img/prepclass.png';
function Header(){
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="" className='logo' />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<div className='ml-auto'>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#home">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">About Us</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#patrons">Our Patrons</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#works">How It Works</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);

}
export default Header;