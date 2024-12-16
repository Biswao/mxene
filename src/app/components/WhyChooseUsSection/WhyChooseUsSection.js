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
              <h2 className="font-bold mt-4">Our Values</h2><br />
              {/* <h4 className="font-bold">Innovation:</h4> */}
              <p className="mt-4">
                
           	•         	<strong>Curiosity:</strong> A passion for discovery and learning.<br /><br />
           	•         	<strong>Integrity:</strong> Commitment to ethical, transparent research.<br /><br />
           	•         	<strong>Collaboration:</strong> Building strong partnerships for shared success.<br /><br />
           	•         <strong>	Sustainability:</strong> Considering long-term environmental impact.<br /><br />
           	•         	<strong>Adaptability:</strong> Staying open to new directions and ideas.<br /><br />
< br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUsSection;
