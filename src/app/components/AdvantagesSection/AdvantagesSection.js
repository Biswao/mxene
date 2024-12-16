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
      { title: "Battery Technology", description: "Investigating the Future of Energy Storage.", image:img1 },
      { title: "EMI Shielding", description: "Exploring Advanced Shielding Solutions.",image:img2 },
      { title: "Water Desalination", description: "Studying MXene Membranes for Water Purification.",image:img3 },
      { title: "Custom R&D", description: "Collaborative Research for Unique Challenges.",image:img4 },
    ];
    return (
      <div className="container py-12">
        <h3 className="text-center text-3xl font-bold mb-8">Key Research Areas</h3>
       <center> <p className='mb-5'>Our research is focused on exploring how these materials might solve real-world challenges. 
          While we are in the early stages of investigation, our findings so far are promising. 
          We are committed to working alongside industry partners, researchers, and innovators to uncover applications 
          that could drive progress.
          Join us as we explore new frontiers and pursue answers that may lead to tomorrow’s breakthroughs.
 </p></center>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {advantages.map((adv, index) => (
            <AdvantageCard key={index} title={adv.title} description={adv.description} image={adv.image} />
          ))}
        </div>
      </div>
    );
  };
  
  export default AdvantagesSection;
  