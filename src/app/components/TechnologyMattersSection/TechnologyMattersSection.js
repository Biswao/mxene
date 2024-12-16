import imga from '../../../../public/assets/adv1.png'
import imgb from '../../../../public/assets/adv12.png'
import imgc from '../../../../public/assets/adv13.png'

const TechnologyMattersSection = () => {
  const items = [
    {
      title: "Cost-Effective High Purity", description: "Achieves high purity levels at a fraction of traditional costs.",
      image: imga.src
    },
    {
      title: "Enhanced Stability", description: " Ideal for demanding applications like energy storage and water desalination.",
      image: imgb.src
    },
    {
      title: "Scalability", description: "Designed for large-scale production to meet industry needs.",
      image: imgc.src
    },
  ];
  return (

    <div className="container py-12">
      <h3 className="text-center text-3xl font-bold mb-8 text-center">Why Our Patented Technology Matters</h3>
      <p className=' text-center'>Our patented technology combines cost efficiency with exceptional quality, allowing us to serve
        diverse industries while reducing environmental impact.</p>
      <div style={{display:'flex',justifyContent:'space-around',gap:'10'}}>
        {items.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={item.image} alt='icons' style={{ backgroundColor: 'white', padding: '10px', borderRadius: '50%' }}
              className='shadow-md' />
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyMattersSection;
