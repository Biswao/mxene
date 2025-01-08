import '../HeroSection/HeroSection.css'

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="container-fluid d-flex align-items-center p-0" style={{ height: '90vh' }}> 
  <video autoPlay muted loop id="myVideo" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black', }}>
    <source src="/assets/mxtechLogo.mp4" type="video/mp4" />
  </video>

  <div className="container position-absolute top-50 start-50 translate-middle text-center text-white" data-aos="fade-up" data-aos-delay="500">
    
  </div>
</section>

    </>
  );
};

export default HeroSection;


