import React from 'react'
import './Battery.css'
import batteryImg from '../../../../public/assets/mxeneBattery.png'
import MyButton from '@/app/components/MyButton/MyButton'
import Link from 'next/link'
function page() {
  return (
    <>

      <div className='sody'>
        <div className="wave">  </div>
        <div className="wave">  </div>
        <div className="wave">  </div>


        <div className='container pt-12' style={{ marginTop: '6rem' }}>
          <div className='row'>

            <div className='column col-lg-5 my-auto' style={{ color: 'white' }}>
              <h1 className="font-bold">Battery Technology</h1>
              <h6 className="font-bold pt-4">  Investigating Next-Generation Battery Possibilities.</h6>
              <h4 className="font-bold pt-4">Investigating Next-Generation Battery Possibilities.</h4>

              {/* </ul> */}
            </div>
            <div className='column col-lg-7 py-4 pt-12' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <center> <img
                src={batteryImg.src}
                alt="Molecular structure"
                style={{ borderRadius: '10px' }}
              /></center>
            </div>
          </div>
        </div>

        <section className="section" id="lithium-metal">
          <div className="col-lg-6">
          <h2>Lithium-Metal Batteries</h2>
          <ul>
            <li><strong>Energy Density:</strong> Researching ways to store more energy in smaller, lighter batteries.</li>
            <li><strong>Charging Speed:</strong> Investigating faster-charging possibilities.</li>
            <li><strong>Safety:</strong> Exploring methods to reduce risks associated with dendrites.</li>
          </ul>
          </div>
          {/* <div className="col-lg-6">
            <img src="" alt="Lithium-metal Batteries" />
          </div> */}
        </section>

        <section className="section" id="solid-state">
        <div className="col-lg-6">
          <h2>Solid-State Batteries</h2>
          <ul>
            <li><strong>Efficiency:</strong> Studying improvements in ionic conductivity.</li>
            <li><strong>Safety:</strong> Considering safer alternatives to liquid electrolytes.</li>
          </ul>
          </div>
          <div className="col-lg-6">

          </div>
        </section>

        <section className="section" id="grid-storage">
        <div className="col-lg-6">
          <h2>Grid Storage</h2>
          <ul>
            <li><strong>Scalability:</strong> Examining large-scale solutions for renewable energy.</li>
            <li><strong>Reliability:</strong> Exploring consistent, long-duration energy storage.</li>
          </ul>
          </div>
          <div className="col-lg-6">

          </div>
        </section>

        <section className="section" id="consumer-electronics">
        <div className="col-lg-6">
          <h2>Consumer Electronics</h2>
          <ul>
            <li><strong>Battery Life:</strong> Investigating potential ways to extend the life of portable devices.</li>
            <li><strong>Compact Design:</strong> Exploring efficient storage for smaller devices.</li>
          </ul>
          </div>
          <div className="col-lg-6">

          </div>
        </section>
        <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Explore Battery Research' /></center></div></Link>
        <div className="container text-center pt-12 mb-12 whyOur" style={{ borderRadius: '2rem' }}>
          <h2>Why Our Battery Research Matters</h2>
          <p>Our research could lay the groundwork for future advancements in electric vehicles, renewable energy storage, and consumer electronics.
            <br />By exploring these possibilities, we aim to understand how batteries might become faster, safer, and more efficient.
          </p>
          <Link href='/pages/ContactUs'><div className='pb-6'><center><MyButton name='Collaborate on Battery Research' /></center></div></Link>
        </div>
      </div>


    </>

  )
}

export default page

