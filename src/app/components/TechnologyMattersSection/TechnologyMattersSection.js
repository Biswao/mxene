import imga from "../../../../public/assets/circuit.png";
import imgb from "../../../../public/assets/airplane.png";
import imgc from "../../../../public/assets/blood-pressure-meter.png";

const TechnologyMattersSection = () => {
  const researchAreas = [
    {
      title: "Electronics Protection",
      image: imga.src, // Replace with your image path
      description: "We are exploring how MXenes could help shield:",
      subPoints: [
        "Consumer Electronics: Devices like smartphones, tablets, and computers.",
        "Industrial Equipment: Machinery and systems sensitive to electromagnetic.",
      ],
    },
    {
      title: "Defense and Aerospace",
      image: imgb.src, // Replace with your image path
      description: "Our research focuses on potential applications for:",
      subPoints: [
        "Military Communications: Securing communication channels from interference.",
        "Aerospace Systems: Lightweight shielding for aircraft and satellites.",
      ],
    },
    {
      title: "Medical Devices",
      image: imgc.src, // Replace with your image path
      description: "We are investigating how MXenes might protect:",
      subPoints: [
        "Diagnostic Equipment: Ensuring accurate results in imaging and testing.",
        "Implantable Devices: Keeping pacemakers and other devices safe from interference.",
      ],
    },
  ];

  return (
    <div className="container py-12">
      <h3 className="text-center text-3xl font-bold mb-8">Research Areas</h3>

      <div className="row">
        {researchAreas.map((area, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <img
                  src={area.image}
                  alt={`${area.title} Image`}
                  className="mx-auto w-16 h-16 object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {area.subPoints.map((point, i) => (
                  <li key={i} className="text-gray-600">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyMattersSection;
