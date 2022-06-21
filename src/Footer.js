import footer from './img/prepclass.png';
function Footer() {
	return(
		<footer className="container footer">
			<div className="row desktop">
				<div className="col-md-6">
					<img src={footer} alt="" className='img-fluid'/>
				</div>
				<div className="col-md-6 text-end">
					<small>Copyright © PrepClass | All Rights Reserved </small>
				</div>
			</div>
			<div className="row mobile">
				<div className="col-md-6 text-center pb-3">
					<img src={footer} alt="" className='img-fluid'/>
				</div>
				<div className="col-md-6 text-center">
					<small>Copyright © PrepClass | All Rights Reserved </small>
				</div>
			</div>
		</footer>
	);
}

export default Footer;