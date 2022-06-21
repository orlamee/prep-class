import patronone from './img/patron-1.png'
import patrontwo from './img/patron-2.png'
import patronthree from './img/patron-3.png'

function Patron() {
  return (
    <div className="container patron-section" data-aos="slide-up" data-aos-duration="1000" id='patrons'>
      <div className='text-center mb-5'>
        <h2>Our Patrons</h2>
      </div>
      <div className="row">
        <div className="col-md-4 text-center mb-3">
          <img src={patronone} alt="" className='img-fluid'/>
          <h6 className='pt-3 fw-bold'>Eduabasi</h6>
        </div>
        <div className="col-md-4 text-center mb-3">
        <img src={patrontwo} alt="" className='img-fluid'/>
        <h6 className='pt-3 fw-bold'>Shuttabug</h6>
        </div>
        <div className="col-md-4 text-center mb-3">
        <img src={patronthree} alt="" className='img-fluid'/>
        <h6 className='pt-3 fw-bold'>Obanor Chukwuwezam</h6>
        </div>
      </div>
    </div>
  );
}

export default Patron;