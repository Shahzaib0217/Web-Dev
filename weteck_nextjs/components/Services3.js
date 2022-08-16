import React from 'react'
import Image from 'next/image'

const Services3 = () => {
  return (
    <>
      <h6 className='pt-40 pl-36 pr-36 pb-0 text-xs   flex justify-center'>We are here to provide </h6>
      <h6 className='font-bold pt-0 pl-36 pr-36 pb-0 text-3xl   flex justify-center'>Experts Services To Change Business</h6>

      <div className='grid grid-rows-3 grid-flow-col gap-8 p-20'>

        <div className='flex justify-center border-2 border-transparent primary rounded-2xl pt-2 pr-8 pl-8 pb-4'>
          {/* image  */}
          <div >
            <Image src={require('/assets/Weteck Homepage Assets/Component 8 – 1.svg')} />
          </div>
          {/* content */}
          <div >
            <h3 className="font-bold pt-4 pl-12 text-lg  ">Software Development</h3>
            <h6 className="text-xs pl-12  ">WeTeck helps its customers
              to build<br></br>an economical and optimized software<br></br>system...<a href='#'>Learn More</a></h6>
          </div>
        </div>
        <div className='flex justify-center border-2 border-transparent primary rounded-2xl pt-2 pr-8 pl-8 pb-4'>
          {/* image  */}
          <div >
            <Image src={require('/assets/Weteck Homepage Assets/undraw_usability_testing_re_uu1g.svg')} />
          </div>
          {/* content */}
          <div >
            <h3 className="font-bold pt-4 pl-14 text-lg  ">Quality Assurance</h3>
            <h6 className="text-xs pl-14  ">Our qualified quality assurance teams<br></br>
              and software testers thoroughly test<br></br>the system...<a href='#'>Learn More</a></h6>
          </div>
        </div>

        <div className='flex justify-center border-2 border-transparent primary rounded-2xl pt-2 pr-8 pl-8 pb-4'>
          {/* image  */}
          <div >
            <Image src={require('/assets/Weteck Homepage Assets/undraw_pair_programming_re_or4x.svg')} />
          </div>
          {/* content */}
          <div >
            <h3 className="font-bold pt-4 pl-12 text-lg  ">IT Consultancy</h3>
            <h6 className="text-xs pl-12  ">We offer IT consultation sessions
              that <br></br>can help you to digitalize your business<br></br>or institution...<a href='#'>Learn More</a></h6>
          </div>
        </div>
        <div className='flex justify-center border-2 border-transparent primary rounded-2xl pt-2 pr-8 pl-8 pb-4'>
          {/* image  */}
          <div >
            <Image src={require('/assets/Weteck Homepage Assets/undraw_online_popularity_re_nm0s.svg')} />
          </div>
          {/* content */}
          <div >
            <h3 className="font-bold pt-4 pl-14 text-lg  ">User Friendly Design</h3>
            <h6 className="text-xs pl-14  ">WeTeck has a well-qualified team of<br></br>designers
              that ensures the responsiveness<br></br>of the system...<a href='#'>Learn More</a></h6>
          </div>
        </div>

        <div className='flex justify-center border-2 border-transparent primary rounded-2xl pt-2 pr-8 pl-8 pb-4'>
          {/* image  */}
          <div >
            <Image src={require('/assets/Weteck Homepage Assets/undraw_visionary_technology_re_jfp7.svg')} />
          </div>
          {/* content */}
          <div >
            <h3 className="font-bold pt-4 pl-14 text-lg  ">Professional Trainings</h3>
            <h6 className="text-xs pl-14  ">We offer professional IT training
              in a<br></br>productive environment that helps<br></br>its students to learn...<a href='#'>Learn More</a></h6>
          </div>
        </div>
        <div className='flex justify-center border-2 border-transparent primary rounded-2xl pt-2 pr-8 pl-8 pb-2'>
          {/* image  */}
          <div >
            <Image src={require('/assets/Weteck Homepage Assets/undraw_building_websites_i78t.svg')} />
          </div>
          {/* content */}
          <div >
            <h3 className="font-bold pt-4 pl-14 text-lg  ">Interships</h3>
            <h6 className="text-xs pl-14  ">WeTeck also offers many internships
              on<br></br>different technology stacks.
              We allow our<br></br>students to implement...<a href='#'>Learn More</a></h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services3