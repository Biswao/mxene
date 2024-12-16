import img1 from '../../../../public/assets/adv1.png'
import img2 from '../../../../public/assets/adv12.png'
import img3 from '../../../../public/assets/adv13.png'
import img4 from '../../../../public/assets/adv14.png'

const AdvantageCard = ({ title, description,image }) => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
     <center><img style={{backgroundColor:'white',padding:'10px',borderRadius:'50%'}} 
     className='shadow-md' src={image.src} alt="Section Images"/>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p></center>
    </div>
  );
  
  const AdvantagesSection = () => {
    const advantages = [
      { title: "Patented Cost-Effective Production", description: "Our unique production technology ensures premium quality at an affordable price.", image:img1 },
      { title: "High-Performance Materials", description: "Engineered for superior conductivity, stability, and durability.",image:img2 },
      { title: "Sustainable Solutions", description: "Eco-friendly production aligns with global sustainability goals, minimizing waste and energy consumption.",image:img3 },
      { title: "Customization", description: "We work closely with clients to deliver tailored solutions that meet industry-specific demands.",image:img4 },
    ];
    return (
      <div className="container py-12">
        <h3 className="text-center text-3xl font-bold mb-8">Advantages of ReseaproLabs Products</h3>
        <p>ReseaproLabs’ commitment to innovation, quality, and affordability makes us a leader in advanced materials. 
          Our patented production methods allow us to offer high-purity MXene and MaxPhase materials at a reduced cost, 
          making groundbreaking technology accessible to a wide range of industries.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {advantages.map((adv, index) => (
            <AdvantageCard key={index} title={adv.title} description={adv.description} image={adv.image} />
          ))}
        </div>
      </div>
    );
  };
  
  export default AdvantagesSection;
  