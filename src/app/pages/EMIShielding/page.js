"use client";
import React from "react";
import "./EMI.css";
import MyButton from "@/app/components/MyButton/MyButton";
import Link from "next/link";

const EMIShieldingPage = () => {
  return (
    <>
      <div className="wavy">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>


      <div className="emi-page" style={{paddingTop:'60px'}}>
      <section className="emi-introduction">
      <h1>Exploring Next-Generation EMI Shielding Solutions</h1>
        <p>
          At MXeneTech by Reseapro Labs, we are studying how MXenes and other 2D
          materials could improve Electromagnetic Interference (EMI) shielding.
          Effective EMI shielding is essential for protecting sensitive
          electronics, defense systems, medical devices, and communication
          networks from unwanted electromagnetic signals.
        </p>
        <p>
          Our research is focused on understanding the properties of MXenes and
          evaluating how these materials could be used to create lightweight,
          efficient, and flexible shielding solutions. While still in the
          research phase, early results indicate that MXenes may offer unique
          advantages that could meet the growing demand for better EMI
          protection.
        </p>
      </section>

      <section className="emi-research">
        <h2>Research Areas</h2>
        <div className="emi-research-item">
          <h3>Electronics Protection</h3>
          <ul>
            <li>Consumer Electronics: Devices like smartphones, tablets, and computers.</li>
            <li>Industrial Equipment: Machinery and systems sensitive to electromagnetic interference.</li>
          </ul>
        </div>

        <div className="emi-research-item">
          <h3>Defense and Aerospace</h3>
          <ul>
            <li>Military Communications: Securing communication channels from interference.</li>
            <li>Aerospace Systems: Lightweight shielding for aircraft and satellites.</li>
          </ul>
        </div>

        <div className="emi-research-item">
          <h3>Medical Devices</h3>
          <ul>
            <li>Diagnostic Equipment: Ensuring accurate results in imaging and testing.</li>
            <li>Implantable Devices: Keeping pacemakers and other devices safe from interference.</li>
          </ul>
        </div>
      </section>

      <section className="emi-benefits">
        <h2>Benefits We Are Exploring</h2>
        <ul>
          <li>Lightweight Materials: Reducing weight while maintaining performance.</li>
          <li>High Shielding Efficiency: Blocking interference effectively.</li>
          <li>Flexibility: Potential for use in different shapes and sizes.</li>
        </ul>
      </section>

      <section className="emi-collaborate">
        <h2>Collaborate with Us</h2>
        <p>
          We are eager to work with partners who share our interest in EMI
          shielding solutions. Whether you’re in electronics, defense, or
          medical technology, we welcome your ideas and collaboration.
        </p>
        <div className="emi-buttons">
         
         <Link href='/pages/ContactUs'> <MyButton name='Contact Us' /></Link>
         
        </div>
      </section>
    </div>

    </>
  );
};

export default EMIShieldingPage;
