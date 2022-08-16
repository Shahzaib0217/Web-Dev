import React from 'react'
import Image from 'next/image'
const Content1 = () => {
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
        </>
    )
}

export default Content1