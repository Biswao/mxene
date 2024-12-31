import MyButton from "../MyButton/MyButton.js";
import Link from "next/link.js";

const PatentsSection = () => {
    return (
      <div className="bg-gray-50 py-12 px-6">
        <h3 className="text-center text-3xl font-bold mb-8" style={{color:'#1f2937'}}>Collaborate with Us</h3>
        <div className="container-fluid flex flex-col md:flex-row items-center">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div>
              <center><video autoPlay muted loop id="myVideo" style={{ width: '30%', height: '100%', objectFit: 'cover',
                background:'white',boxShadow:'none',border:'none !important',padding:'1rem'}}>
                <source src="/assets/cloudBattery.mp4" type="video/mp4" />
              </video></center>
            </div>
          </div>
          <div className="col-lg-5 col-md-6  col-sm-12" style={{color:'#1f2937'}}>
            <p className="my-4">
            We are eager to work with partners who share our interest in EMI shielding solutions. 
            Whether you’re in electronics, defense, or medical technology, we welcome your ideas and collaboration.
            </p>
           <Link href='/pages/ContactUs'> <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600">
            Let’s Collaborate
            </button></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default PatentsSection;
  