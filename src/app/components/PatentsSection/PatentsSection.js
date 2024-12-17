import MyButton from "../MyButton/MyButton.js";
import img from "../../../../public/assets/cloudBattery.gif"
import Link from "next/link.js";

const PatentsSection = () => {
    return (
      <div className="bg-gray-50 py-12 px-6">
        <h3 className="text-center text-3xl font-bold mb-8" style={{color:'#1f2937'}}>Collaborate with Us</h3>
        <div className="container-fluid flex flex-col md:flex-row items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <img 
              src={img.src}
              style={{width:'30%'}}
               className="mx-auto d-block"
              />
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
  