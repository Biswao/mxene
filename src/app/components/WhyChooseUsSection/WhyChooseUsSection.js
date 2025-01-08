import "./WhyChooseUsSection.css";
import logoPng from "../../../../public/assets/MXeneLogoPng.png";

const WhyChooseUsSection = () => {
  return (
    <>
      <div className="corebg">
        <div className="container py-2">
          <div className="row">
            <div className="column col-lg-7" style={{position:"relative"}}>
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundColor: "rgba(248, 247, 216, 0.7)",
                }}
              >
                <source src="/assets/Mxenevideo1.mp4" type="video/mp4" />
              </video>
              <div style={{position:"absolute" , top:'30%', left:"20%"}}>
                <center>
                  <img
                    src={logoPng.src}
                    style={{ marginBottom: "2rem" }}
                    alt="MxeneTech Logo"
                  />
                </center>
              </div>
            </div>
            <div className="column col-lg-5 my-auto">
              {/* <h2 className="font-bold mt-4">Our Values</h2><br /> */}
              <h3
                className="text-3xl font-bold mb-8"
                style={{ color: "white" }}
              >
                Our Values
              </h3>
              {/* <h4 className="font-bold">Innovation:</h4> */}
              <p className="mt-4">
                • <strong>Curiosity:</strong> A passion for discovery and
                learning.
                <br />
                <br />• <strong>Integrity:</strong> Commitment to ethical,
                transparent research.
                <br />
                <br />• <strong>Collaboration:</strong> Building strong
                partnerships for shared success.
                <br />
                <br />• <strong> Sustainability:</strong> Considering long-term
                environmental impact.
                <br />
                <br />• <strong>Adaptability:</strong> Staying open to new
                directions and ideas.
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
