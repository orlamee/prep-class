import works from './img/works.png';
function Works() {
	return (
		<div className="container-fluid works-section" id='works'>
			<div className='container'>
				<div className="row">
					<div className="col-md-6" data-aos="slide-right" data-aos-duration="1000">
						<h2 className='pb-3'>How It Works</h2>
						<h6>Every week, Prepclass facilitators go on radio, IG live, youtube and Facebook to interact with parents and to deliver the TBYK programme, to help parents and guardians understand the impact technology has had on the way they live and think, the impact it is having in the society and the way it is going to impact our future. We answer questions and guide parents on how they can help their kids unlock their potential and harness the power of technology.</h6>
						<h6 className='pt-2'>Today, several people make their annual income through by creating content on platforms, through cryptocurrency, and through by participating in the gig economy.</h6>
					</div>
					<div className="col-md-6" data-aos="slide-left" data-aos-duration="1000">
						<img src={works} alt="" className='img-fluid' />
					</div>
				</div>
			</div>
		</div>

	);
}

export default Works;