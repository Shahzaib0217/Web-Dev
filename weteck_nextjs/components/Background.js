import React from 'react'
import Image from "next/image"
function Background() {
    return (
        <>
            <div className='absolute -top-64 -right-96 w-10/12 h-auto -z-10'>
                <Image src={require('/assets/Weteck Homepage Assets/Component 4 – 1.svg')} />
            </div>


            <div className='absolute top-full right-1/2 w-1/2 h-auto -z-10' >
                <Image src={require('/assets/Weteck Homepage Assets/Component 3 – 1.svg')} />
            </div>


            <div className="absolute -bottom-[1100px] -z-10  -right-96 w-1/2 -z-10'">
                <Image src={require('/assets/Weteck Homepage Assets/Component 5 – 1.svg')} />
            </div>


            <div className="absolute -bottom-[1600px]  -left-96 w-2/3 -z-10">
                <Image src={require('/assets/Weteck Homepage Assets/Component 6 – 1.svg')} />
            </div>

            <div className="absolute -bottom-[2490px]  -left-64 w-2/5 -z-10">
                <Image src={require('/assets/Weteck Homepage Assets/Component 7 – 1.svg')} />
            </div>
        </>
    )
}

export default Background
