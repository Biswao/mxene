"use client";
import React from "react";
import "./EMI.css";
import MyButton from "@/app/components/MyButton/MyButton";
import Link from "next/link";
import PatentsSection from "@/app/components/PatentsSection/PatentsSection";

const EMIShieldingPage = () => {
  return (
    <>
      <div className="wavy">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="emi-page" style={{ paddingTop: "60px" }}>
        <section className="emi-introduction">
          <div className="container-fluid">
            <h1 style={{ color: "white", marginBottom: "30px",textShadow:'-2px 2px 4px black' }}>
              Exploring Next-Generation EMI Shielding Solutions
            </h1>
            <div className="row">
              <div className="col-lg-8">
                <p style={{ color: "white", fontSize: "1.0rem" }}>
                  At MXeneTech by Reseapro Labs, we are studying how MXenes and
                  other 2D materials could improve Electromagnetic Interference
                  (EMI) shielding. Effective EMI shielding is essential for
                  protecting sensitive electronics, defense systems, medical
                  devices, and communication networks from unwanted
                  electromagnetic signals.
                </p>
                <p style={{ color: "white", fontSize: "1.0rem" }}>
                  Our research is focused on understanding the properties of
                  MXenes and evaluating how these materials could be used to
                  create lightweight, efficient, and flexible shielding
                  solutions. While still in the research phase, early results
                  indicate that MXenes may offer unique advantages that could
                  meet the growing demand for better EMI protection.
                </p>
              </div>

              <div className="col-lg-4">
                <img
                  src="/assets/Emi shielding.jpg"
                  alt=""
                  style={{ borderRadius: "5px", boxShadow:'-5px 5px 10px black ' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="container">
            <h2 className="text-center mb-4" style={{ color: "white",textShadow:'-2px 2px 4px black' }}>
              <strong>Research Areas</strong>
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 shadow border-0" style={{opacity:'0.8', boxShadow:'-5px 5px 10px black '}}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="/assets/verified.png"
                        alt="Electronics Protection"
                        className="me-3"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <h3 className="card-title m-0"> <strong>Electronics Protection </strong></h3>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Consumer Electronics:</strong><br/> Smartphones,
                        tablets, and computers
                      </li>
                      <li>
                        <strong>Industrial Equipment:</strong><br/> Machinery
                        sensitive to interference
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow border-0" style={{opacity:'0.8', boxShadow:'-5px 5px 10px black '}}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="/assets/airplane (1).png"
                        alt="Defense and Aerospace"
                        className="me-3"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <h3 className="card-title m-0"> <strong>Defense and Aerospace </strong></h3>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Military Communications:</strong><br/> Secure
                        channels
                      </li>
                      <li>
                        <strong>Aerospace Systems:</strong><br/> Lightweight
                        shielding for aircraft
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow border-0" style={{opacity:'0.8', boxShadow:'-5px 5px 10px black '}}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="/assets/blood-pressure-meter (1).png"
                        alt="Medical Devices"
                        className="me-3"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <h3 className="card-title m-0"> <strong>Medical Devices </strong></h3>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Diagnostic Equipment:</strong><br/> Ensuring accurate
                        imaging
                      </li>
                      <li>
                        <strong>Implantable Devices:</strong><br/> Safe from
                        interference
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="emi-benefits" style={{opacity:'0.8'}}>
          <div className="container">
            <div className="row" style={{display:'flex',alignItems:'center'}}>
              <div className="col-lg-7">
                <h2><strong>Benefits We Are Exploring</strong></h2>
                <ul style={{lineHeight:'50px' , listStyleType:'auto' , paddingLeft:'10px'}}>
                  <li>
                    Lightweight Materials: Reducing weight while maintaining
                    performance.
                  </li>
                  <li>
                    High Shielding Efficiency: Blocking interference
                    effectively.
                  </li>
                  <li>
                    Flexibility: Potential for use in different shapes and
                    sizes.
                  </li>
                </ul>
              </div>

              <div className="col-lg-5">
                <img src="/assets/Effective.jpg" alt="#" style={{borderRadius:'8px',boxShadow:'-5px 5px 10px black '}} />
              </div>
            </div>
          </div>
        </section>

        <PatentsSection />
      </div>
    </>
  );
};

export default EMIShieldingPage;
