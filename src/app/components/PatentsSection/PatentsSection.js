import MyButton from "../MyButton/MyButton.js";
import img from "../../../../public/assets/cloudBattery.gif"

const PatentsSection = () => {
    return (
      <div className="bg-gray-50 py-12 px-6">
        <h3 className="text-center text-3xl font-bold mb-8">Our Patents and Partnerships</h3>
        <div className="container-fluid flex flex-col md:flex-row items-center">
          <div className="col-lg-6 col-sm-12">
            <div>
              <img 
              src={img.src}
              style={{width:'30%'}}
               className="mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-lg-5  col-sm-12">
            <p className="my-4">
              Our R&D efforts have resulted in multiple patents and strategic
              partnerships that strengthen our capabilities and broaden our
              impact.
            </p>
           <MyButton />
          </div>
        </div>
      </div>
    );
  };
  
  export default PatentsSection;
  