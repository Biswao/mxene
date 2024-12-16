import img from '../../../../public/assets/img3.jpg'
import './CoreValuesSection.css'

const CoreValuesSection = () => {
  return (

    <>
    <div className='corebg'>
      <div className='container'>
        <div className='row'>
          
          <div className='column col-lg-5 my-auto'>
          <h3 className="font-bold pt-4">Core Values</h3>
            <ul className="mt-4">
              <li><strong>Innovation:</strong><br /> Cutting-edge materials with real-world impact.</li>< br />
              <li><strong>Affordability:</strong><br />  Patented technology that reduces costs, making high-quality materials accessible.</li> <br />
              <li><strong>Sustainability:</strong><br />  Responsible practices that support a cleaner, greener future.</li> < br />
            </ul>
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
