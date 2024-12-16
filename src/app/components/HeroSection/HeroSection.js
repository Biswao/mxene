import '../HeroSection/HeroSection.css'
import logoPng from '../../../../public/assets/MXeneLogoPng.png'
import MyButton from '../MyButton/MyButton';
// import heroVideo from "../../assets/Mxenevideo1.mp4"

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="container-fluid d-flex align-items-center p-0" style={{ height: '80vh' }}> 
  <video autoPlay muted loop id="myVideo" style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black', }}>
    <source src="/mxene/assets/Mxenevideo1.mp4" type="video/mp4" />
  </video>

  <div className="container position-absolute top-50 start-50 translate-middle text-center text-white" data-aos="fade-up" data-aos-delay="500">
    {/* <h1 style={{ fontSize: '6rem' }} className='text-stroke'>MXene</h1> */}
    <center><img src={logoPng.src} style={{height:'20vh',marginBottom:'2rem'}} alt="MxeneTech Logo"/></center>
    <h2  style={{ fontSize: '2rem' }} className='text-stroke FirstLiner'>Empowering Tomorrow with Patented Advanced Materials</h2><br />
    <h4 className='text-stroke secondLiner' style={{fontWeight:'normal'}}>At ReseaproLabs, we are pioneering the future with patented technology 
      for high-performance materials like MaxPhase and MXene. Our unique production methods enable us to deliver high-purity materials 
      at a fraction of traditional costs, making advanced solutions accessible to industries in energy storage, EMI shielding, and 
      water desalination.</h4>
  </div>
</section>

    </>
  );
};

export default HeroSection;
