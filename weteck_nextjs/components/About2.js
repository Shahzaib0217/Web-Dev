import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About2 = () => {
    return (
        <>
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
        </>
    )
}

export default About2