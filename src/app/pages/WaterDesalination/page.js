import MyButton from '@/app/components/MyButton/MyButton'
import Link from 'next/link'
import React from 'react'
import mxeneImg2 from '../../../../public/assets/waterd.png'
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
      <div className='column col-lg-5 my-auto' style={{ color: 'white' }}>
        <h1 className="font-bold">MXene Membranes</h1>
        <h6 className="font-bold pt-4">Researching MXene Membranes for Advanced Water Purification</h6>
        <h4 className="font-bold pt-4">Exploring MXenes for Efficient and Sustainable Water Solutions</h4>
      </div>
      <div className='column col-lg-7 py-4 pt-12' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <center><img
          src={mxeneImg2.src}
          alt="MXene Structure"
          style={{ borderRadius: '10px' }}
        /></center>
      </div>
    </div>
  </div>

  <section className="section" id="desalination">
    <h2>Desalination Plants</h2>
    <ul>
      <li><strong>Improved Efficiency:</strong> How MXenes might enhance water flow and filtration rates.</li>
      <li><strong>Energy Reduction:</strong> Potential ways to reduce the energy needed for desalination.</li>
    </ul>
  </section>

  <section className="section" id="industrial-wastewater">
    <h2>Industrial Wastewater Treatment</h2>
    <ul>
      <li><strong>Heavy Metal Removal:</strong> Filtering out contaminants like lead and mercury.</li>
      <li><strong>Sustainable Processes:</strong> Reducing the environmental impact of wastewater treatment.</li>
    </ul>
  </section>

  <section className="section" id="portable-water">
    <h2>Portable Water Solutions</h2>
    <ul>
      <li><strong>Emergency Response:</strong> Systems for disaster relief and remote areas.</li>
      <li><strong>Compact Design:</strong> Lightweight solutions for field use and outdoor activities.</li>
    </ul>
  </section>

  <section className="section" id="potential-benefits">
    <h2>Potential Benefits</h2>
    <ul>
      <li><strong>Faster Filtration:</strong> Investigating membranes with higher flow rates.</li>
      <li><strong>Selective Filtering:</strong> Exploring targeted removal of contaminants.</li>
      <li><strong>Durability:</strong> Studying long-lasting, low-maintenance membranes.</li>
    </ul>
  </section>

  <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Explore MXene Research' /></center></div></Link>

  <div className="container text-center pt-12 mb-12 whyOur" style={{borderRadius:'2rem'}}>
    <h2>Why Our Water Research Matters</h2>
    <p>Our research at MXeneTech could pave the way for innovative water purification techniques. By leveraging MXene-based technologies, we aim to enhance desalination, industrial wastewater treatment, and portable water solutions to address global water challenges.</p>
    <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Collaborate on Water Solutions' /></center></div></Link>
  </div>

  <div className="footer text-center pt-6">
    <h3>Let’s Explore the Potential of 2D Materials Together</h3>
    <p>We invite researchers, industry leaders, and innovators to join us in exploring MXenes and other advanced materials to develop solutions for a sustainable future.</p>
    <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Get in Touch' /></center></div></Link>
  </div>
</div>

    </div>
  )
}

export default page
