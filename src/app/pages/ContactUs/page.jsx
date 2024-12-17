import React from 'react'
import img from '../../../../public/assets/img2.jpg'

function page() {
  return (
       <>
       <div className='corebg'>
         <div className='container pt-12'>
           <div className='row'>
             
             <div className='column col-lg-5 my-auto'>
             <h3 className="font-bold pt-4">About Us</h3>
             <h6 className="font-bold pt-4">  Exploring the Boundless Potential of 2D Materials.</h6>
             <h4 className="font-bold pt-4">Who We Are</h4>
             <p>At MXeneTech by Reseapro Labs, we are driven by curiosity and the desire to understand advanced 2D materials. Our focus is on MXenes, MAX Phases, and Graphene—materials with the potential to address significant challenges in energy, electronics, and water treatment.
    
    We are a team of researchers, scientists, and engineers who are passionate about discovery. By exploring these materials, we aim to generate insights that could lead to real-world applications. Our work is about asking questions, testing ideas, and collaborating with others who share our enthusiasm for innovation.
    </p>
               {/* </ul> */}
             </div>
             <div className='column col-lg-7 py-4 pt-12'>
               <img
                 src={img.src}
                 alt="Molecular structure"
                 style={{borderRadius:'10px'}}
               />
             </div>
           </div>
         </div>
         <div className='container pt-12'>
           <div className='row'>
           <div className='column col-lg-7 py-4 pt-12'>
               <img
                 src={img.src}
                 alt="Molecular structure"
                 style={{borderRadius:'10px'}}
               />
             </div>
             <div className='column col-lg-5 my-auto'>
             
             <h4 className="font-bold pt-4">Our Mission</h4>
             <p>Our mission is to conduct exploratory research into 2D materials and understand their potential applications. We strive to bridge the gap between fundamental science and practical solutions, offering a foundation for future innovations that could benefit society. </p>
               {/* </ul> */}
             </div>
            
           </div>
         </div>
   
         </div>
         <div className='container pt-12'>
           <div className='row'>
             
             <div className='column col-lg-5 my-auto'>
             {/* <h3 className="font-bold pt-4">About Us</h3>
             <h6 className="font-bold pt-4">  Exploring the Boundless Potential of 2D Materials.</h6> */}
             <h4 className="font-bold pt-4">Our Vision</h4>
             <p>We envision a future where advanced materials open new possibilities for industries. Our goal is to contribute knowledge and insights that help pave the way for sustainable, efficient, and innovative technologies.</p>
               {/* </ul> */}
             </div>
             <div className='column col-lg-7 py-4 pt-12'>
               <img
                 src={img.src}
                 alt="Molecular structure"
                 style={{borderRadius:'10px'}}
               />
             </div>
           </div>
         </div>
       </>
  )
}

export default page
