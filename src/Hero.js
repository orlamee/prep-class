import hero from './img/hero.png';
import heromobile from './img/hero-mobile.png';

function Hero() {
	return (
		<div className="container-fluid banner-section" id='home'>
			<img src={hero} alt="" className='img-fluid px-5 desktop' />
			<img src={heromobile} alt="" className='img-fluid px-5 mobile' />
			<div className="banner-inner container" data-aos="slide-up" data-aos-duration="1000">
				<div className="row subtext">
				  <h2 className='hero'>Think Big For Your Kids</h2>
				  <h6 className='subtitle'>The “Think big for your kids” programme is an initiative of Prepclass NG, an education technology company in Nigeria that focuses on aggregating professional tutors and connecting them with learners that need academic support or bespoke learning programs that are specifically crafted to help the learners achieve their goals</h6>
				</div>
			</div>
		</div>
	);
}

export default Hero;