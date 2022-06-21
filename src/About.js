import about from './img/about.png';
function About() {
	return (
		<div className="container about-section" id='about'>
			<div className="row">
				<div className="col-md-6" data-aos="slide-right" data-aos-duration="1000">
					<img src={about} alt="" className='img-fluid' />
				</div>
				<div className="col-md-6" data-aos="slide-left" data-aos-duration="1000">
					<h2 className='pb-2'>What We Do?</h2>
					<h6>The TBYK programme is targeted at educating today’s Nigerian parents on the socio-economical changes and opportunities that technology is helping to unleash in the Nigerian and global markets. The ultimate goal is for parents to gain the awareness they need to help their kids prepare and set themselves up for success in a world where digital innovation, the Internet and technology pervade and are prevalent in every aspect of our lives.</h6>
				</div>
			</div>
		</div>

	);
}

export default About;