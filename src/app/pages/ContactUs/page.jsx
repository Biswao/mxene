// 'use client'
import React from "react";

function ContactPage() {
  const handleSubmit = () =>{
console.log("You tried to submit the form.")
  }
  
  return (
    <>
    <div>
      {/* Contact Us Section */}
      <section className="contact-section" style={{ backgroundColor: "#f0eded" }}>
        <div className="container text-center" style={{paddingTop:"80px" , paddingBottom:'60px'}}>
          <h2 className="contact-title mb-4" style={{ fontWeight: "700", fontSize: "2.5rem" }}>
            Contact Us
          </h2>
          <p className="contact-description mb-5" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Have questions about our services, submissions, or payment procedure? <br />
            We’d love to hear from you! Reach out via email or leave a message below. 
            Our team is here to assist you.
          </p>

          {/* Contact Details & Form */}
          <div className="row justify-content-center align-items-start">
            {/* Contact Info */}
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <div className="contact-info text-start p-4 bg-white rounded shadow-sm">
                <h5 className="mb-3" style={{ fontWeight: "600" }}>Get in Touch</h5>
                <p>
                  <i className="fa fa-telegram me-2" style={{ color: "#0088cc" }}></i>
                  Telegram: <br /><strong>+91-904-000-5445</strong>
                </p>
                <p><br />
                  <i className="fa fa-whatsapp me-2" style={{ color: "#25D366" }}></i>
                  WhatsApp: 
                  <br /> <strong>+1 (646)916-3476 (USA)</strong>
                  <br /> <strong>+91-904-002-3003 (India)</strong>
                  <br /> <strong>+91-923-730-4004 (India)</strong>
                </p>
                <p>
                  <i className="fa fa-envelope me-2" style={{ color: "#ea4335" }}></i>
                  Email: <strong>support@mxenetech.com</strong>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-5 col-md-6">
              <div className="form-container p-4 bg-white rounded shadow-sm">
                <h5 className="text-center mb-4" style={{ fontWeight: "600" }}>
                  Fill in the below details:
                </h5>
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  {/* <div className="form-group mb-3">
                    <select className="form-control" style={{ borderRadius: "8px" }}>
                      <option>Select Service</option>
                      <option>Editing</option>
                      <option>Proofreading</option>
                      <option>Formatting</option>
                    </select>
                  </div> */}
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      rows="4"
                      style={{ borderRadius: "8px" }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    style={{ borderRadius: "8px", fontWeight: "600",backgroundColor:'#282928' }}
                    // onClick={()=> handleSubmit()}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default ContactPage;
