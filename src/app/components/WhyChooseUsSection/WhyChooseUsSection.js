import './WhyChooseUsSection.css'

const WhyChooseUsSection = () => {
  return (
    <>
      <div className='corebg'>
        <div className='container'>
          <div className='row'>
            <div className='column col-lg-7'>
              <video autoPlay muted loop id="myVideo" style={{ width: '100%', height: '100%', objectFit: 'cover', 
                backgroundColor: 'rgba(248, 247, 216, 0.7)' }}>
                <source src="/mxene/assets/mxtechLogo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='column col-lg-5 my-auto'>
              <h2 className="font-bold mt-4">Why Choose Us</h2><br />
              <h4 className="font-bold">Innovation:</h4>
              <p className="mt-4">
                Join us as we shape tomorrow’s technology landscape. With our commitment to innovation and sustainability,
                we empower industries worldwide with materials designed to meet today’s demands and drive tomorrow’s
                breakthroughs.< br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUsSection;
