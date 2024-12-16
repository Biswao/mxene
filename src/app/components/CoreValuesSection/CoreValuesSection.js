import img from '../../../../public/assets/img2.jpg'
import './CoreValuesSection.css'

const CoreValuesSection = () => {
  return (

    <>
    <div className='corebg'>
      <div className='container'>
        <div className='row'>
          
          <div className='column col-lg-5 my-auto'>
          <h3 className="font-bold pt-4">Why Explore with MXeneTech</h3>
            {/* <ul className="mt-4"> */}
            <div className='mt-4'>
              <strong> ✅ Research-Driven:</strong><br /> We focus on rigorous exploration and testing.< br />
              <strong>✅ Potential for Innovation: </strong><br /> Our work seeks to uncover new possibilities.<br />
              <strong>✅ Collaborative Spirit:</strong><br /> We welcome partnerships to advance discovery.< br />
              <strong>✅ Sustainability-Oriented:</strong><br /> Our research considers environmental impact.< br />
              <strong>✅ Experienced Team:</strong><br /> Our scientists and researchers bring deep expertise to every project.< br />
              </div>
            {/* </ul> */}
          </div>
          <div className='column col-lg-7 py-4'>
            <img
              src={img.src}
              alt="Molecular structure"
              style={{borderRadius:'10px'}}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CoreValuesSection;
