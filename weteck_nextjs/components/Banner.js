import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Banner() {
    return (
        <>


            {/* first */}


            <div className='flex justify-spacebetween'>
                {/* content  */}
                <div >
                    <h6 className='font-bold pt-24 pl-24 text-xl'>We Believe in Providing The Best</h6>
                    <h6 className='font-bold pt-2 pl-24 text-5xl'>Customer Service</h6>
                    <h6 className='font-bold pt-2 pl-24 text-xl'>In Addition To High-Quality Softwares</h6>
                    <h6 className='pt-8 pl-24 text-sm'>We build a teamwork relationship with our <br></br>
                        customers to understand their vision and
                        utilize<br></br> our best expertise to make it a successful <br></br>reality
                    </h6>
                    <div className='pt-14 pl-24'>
                        <div className="absolute p-2.5 m-1.5 left-28 ">
                            <Image src="/cal.png" layout="fill" objectFit="contain" />
                        </div>
                        <button className=' h-8 w-56 text-sm   rounded-full border-white bg-cyan-600'><h1 className='text-sm top-0 left-4 relative'>BOOK AN APPOINTMENT</h1> </button>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-red-500
            relative -top-8 left-60 ">
                            <Image src="/play.png" height={20} width={20} />
                        </div>
                    </div>
                </div >
                {/* image  */}
                <div className='relative top-14 left-48 w-2/5 h-auto' >
                    <Image src={require('/assets/Weteck Homepage Assets/Scenes01.svg')} />
                </div>
            </div>



            {/* second */}

            <div className="flex justify-around">
                {/* left */}
                <div className='relative -bottom-36 left-16 w-2/5 h-auto' >
                    <Image src={require('/assets/Weteck Homepage Assets/Scenes07.svg')} />
                </div>
                <hr className='w-16 mt-36 '></hr>

                {/* right */}
                <div >
                    <h6 className='font-bold pt-32 e -ml-10 text-2xl  '> About us </h6>
                    <h6 className='font-bold pt-6  e -ml-10 text-lg  '>Simple! Our mission is to
                        become the best </h6>
                    <h6 className='pt-8 text-sm   -ml-10'>WeTeck is an IT company that
                        focuses on customized software <br></br> solutions for its valuable customers with the utmost
                        dedication,<br></br>  enthusiasm, and sincerity.<br></br>  We have a prime focus on understanding the
                        client’s needs and <br></br> providing them with our expertise for the best optimal
                        software<br></br>  system. WeTeck has built a well-experienced team that can<br></br>provide
                        you ultimate assurance for the web,
                        software <br></br> development,quality  assurance, IT training, and consultancy.
                    </h6>
                    <div className='pt-10 -ml-8 space-x-7'>
                        <Link href="/learnmore">
                            <button className=' h-8 w-32 text-sm   rounded-full border-white bg-cyan-600'>
                                Learn More
                            </button>
                        </Link>
                        <Link href="/portfolio">
                            <button className=' h-8 w-32 text-sm   rounded-full border-slate-200 border-2 bg-transparent'>
                                Portfolio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>




            {/* third */}

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


            {/* forth  */}

            <div className='divcolor pb-12'>
                <h6 className='pt-40 pl-36 pr-36 pb-0 text-xs   flex justify-center'>Awesome Portfolio </h6>
                <h6 className='font-bold pt-0 pl-36 pr-36 pb-0 text-3xl   flex justify-center'>We Have A Great Portfolio To Check</h6>
                <div className='grid grid-rows-1 grid-flow-col gap-0 pl-32 pr-32 pt-14 pb-0'>
                    <div className=' bg-cyan-900 w-48 h-48 rounded-lg'>
                        <div className=' bg-white w-48 h-28 p-0 m-0 rounded-lg '>

                        </div>
                        <h6 className='text-xs   font-bold flex p-4 pb-2 justify-center'>Web Design Project</h6>
                        <h6 className='text-xs   flex pt-0 justify-center'>UX/UI Design</h6>
                    </div>
                    <div className=' bg-cyan-900 w-48 h-48 rounded-lg'>
                        <div className=' bg-white w-48 h-28 p-0 m-0 rounded-lg '>

                        </div>
                        <h6 className='text-xs   font-bold flex p-4 pb-2 justify-center'>Web Design Project</h6>
                        <h6 className='text-xs   flex pt-0 justify-center'>UX/UI Design</h6>
                    </div>
                    <div className=' bg-cyan-900 w-48 h-48 rounded-lg'>
                        <div className=' bg-white w-48 h-28 p-0 m-0 rounded-lg '>

                        </div>
                        <h6 className='text-xs   font-bold flex p-4 pb-2 justify-center'>Web Design Project</h6>
                        <h6 className='text-xs   flex pt-0 justify-center'>UX/UI Design</h6>
                    </div>
                    <div className=' bg-cyan-900 w-48 h-48 rounded-lg'>
                        <div className=' bg-white w-48 h-28 p-0 m-0 rounded-lg '>

                        </div>
                        <h6 className='text-xs   font-bold flex p-4 pb-2 justify-center'>Web Design Project</h6>
                        <h6 className='text-xs   flex pt-0 justify-center'>UX/UI Design</h6>
                    </div>
                </div>
                <div className='flex justify-center pt-8 space-x-4 pr-14'>
                    <button className=' h-8 w-8   rounded-full bg-cyan-600 '> &lt;
                    </button>
                    <button className=' h-8 w-8   rounded-full bg-cyan-600 '>&gt;
                    </button>

                </div>
            </div>



            {/* fifth  */}

            <h6 className='pt-40 pl-36 pr-36 pb-0 text-xs   flex justify-center'>Your trust gives us strength</h6>
            <h6 className='font-bold pt-0 pl-36 pr-36 pb-0 text-4xl   flex justify-center'>To Give Out Our Best</h6>
            <div className='pt-10 p-20'>
                <div className='rounded-full h-32 w-full primary pl-36 pt-6 pb-6 grid grid-cols-5'>
                    <h1 className='text-5xl   font-bold'> 16K</h1>
                    <h1 className='border-l-2 h-10  '></h1>
                    <h1 className='text-5xl   font-bold'>189+</h1>
                    <h1 className='border-l-2 h-10 '></h1>
                    <h1 className='text-5xl   font-bold'>13K</h1>
                    <h1 className='text-xs   pl-6 pt-2'>Clients</h1>
                    <h1 className='text-xs whitespace-nowrap  pl-48 pt-2 '>Team Members</h1>
                    <h1 className='text-xs  whitespace-nowrap pl-96 pt-2'>Active Work</h1>
                </div>

            </div>
        </>
    )
}

export default Banner