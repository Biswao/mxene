import './VisionSection.css'

const VisionSection = () => {
    return (
      <div className=" text-white py-12 px-6 backgroundimg">
        <p className='text-center'>Our Vision</p>
        <h2 className="text-center text-3xl font-bold mb-8 text-stroke">
          <i>MXene</i>: Unlocking the Potential of 2D Materials.
        </h2>
        <h6 className="text-center mb-8  text-stroke" style={{fontSize:'1.5rem',fontWeight:'normal',}}>
        We envision a future where advanced materials open new possibilities for industries.<br/> 
        Our goal is to contribute knowledge and insights that help pave the<br/> way for sustainable, efficient, 
        and innovative technologies.
        </h6>
        {/* <div className="flex flex-wrap justify-center gap-8 text-stroke">
          <div className="text-center">
            <h4 className="text-4xl font-bold">2023</h4>
            <p>Founded</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold">250+</h4>
            <p>Teams</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold">15+</h4>
            <p>Uses</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold">2Cr+</h4>
            <p>Investment</p>
          </div>
        </div> */}
      </div>
    );
  };
  
  export default VisionSection;
  