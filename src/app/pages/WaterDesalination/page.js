import MyButton from '@/app/components/MyButton/MyButton'
import Link from 'next/link'
import React from 'react'
import mxeneImg2 from '../../../../public/assets/waterd.jpg'
import mxeneImg3 from '../../../../public/assets/waterDesali.jpg'
import './waterDesali.css'

function page() {
  return (
    <div>
      <div className='sody'>
  <div className="wave"> </div>
  <div className="wave"> </div>
  <div className="wave"> </div> 

  <div className='container pt-12' style={{marginTop:'4rem'}}>
    <div className='row'>
      <div className='column col-lg-5 my-auto' style={{ color: '#021E39'}}>
        <h1 className="font-bold h1">MXene Membranes</h1>
        <h6 className="font-bold pt-4">Researching MXene Membranes for Advanced Water Purification</h6>
        <h4 className="font-bold pt-4">Exploring MXenes for Efficient and Sustainable Water Solutions</h4>
      </div>
      <div className='column col-lg-7 py-4 pt-12' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <center><img
          src={mxeneImg2.src}
          alt="MXene Structure"
          style={{ borderRadius: '10px', boxShadow:'-5px 5px 15px grey' }}
        /></center>
      </div>
    </div>
  </div>

<div className="container-fluid d-flex">
<section className="section col-lg-3.5" id="desalination">
    <h4><strong>Desalination Plants</strong></h4>
    <ul>
      <li><strong>Improved Efficiency:</strong> How MXenes might enhance water flow and filtration rates.</li>
      <li><strong>Energy Reduction:</strong> Potential ways to reduce the energy needed for desalination.</li>
    </ul>
  </section>

  <section className="section col-lg-3.5" id="industrial-wastewater">
    <h4><strong>Industrial Wastewater Treatment</strong></h4>
    <ul>
      <li><strong>Heavy Metal Removal:</strong> Filtering out contaminants like lead and mercury.</li>
      <li><strong>Sustainable Processes:</strong> Reducing the environmental impact of wastewater treatment.</li>
    </ul>
  </section>

  <section className="section col-lg-3.5" id="portable-water">
    <h4><strong>Portable Water Solutions</strong></h4>
    <ul>
      <li><strong>Emergency Response:</strong> Systems for disaster relief and remote areas.</li>
      <li><strong>Compact Design:</strong> Lightweight solutions for field use and outdoor activities.</li>
    </ul>
  </section>
</div>

  <section className="section" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} id="potential-benefits">
    <div className="col-lg-8">
    <h3><strong>Potential Benefits</strong></h3>
    <ul>
      <li><strong>Faster Filtration:</strong> Investigating membranes with higher flow rates.</li>
      <li><strong>Selective Filtering:</strong> Exploring targeted removal of contaminants.</li>
      <li><strong>Durability:</strong> Studying long-lasting, low-maintenance membranes.</li>
    </ul>
    </div>
    <div className="col-lg-4">
      <img src={mxeneImg3.src} alt="Water Purification" style={{borderRadius:'10px', boxShadow:'-3px 3px 5px black'}}/>
    </div>
  </section>

  <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Explore MXene Research' /></center></div></Link>

  <div className="container text-center pt-12 mb-12 whyOur" style={{borderRadius:'2rem'}}>
    <h2><strong>Why Our Water Research Matters</strong></h2>
    <p>Our research at MXeneTech could pave the way for innovative water purification techniques. 
      <br/>By leveraging MXene-based technologies, we aim to enhance desalination, industrial wastewater treatment, 
      <br/>and portable water solutions to address global water challenges.</p>
    <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Collaborate on Water Solutions' /></center></div></Link>
  </div>

  <div className="footer text-center pt-6">
    <h3>Let’s Explore the Potential of 2D Materials Together</h3>
    <p>We invite researchers, industry leaders, and innovators to join us in exploring MXenes 
      <br/>and other advanced materials to develop solutions for a sustainable future.</p>
    <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Get in Touch' /></center></div></Link>
  </div>
</div>

    </div>
  )
}

export default page
