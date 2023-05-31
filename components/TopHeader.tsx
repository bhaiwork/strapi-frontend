import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='md:mt-[10px] mt-[30px]   md:mx-[5px] mx-[0px] '>
       <Image src="/construction.jpg" alt=" " width={1200} height={200} className='object-cover object-center w-[100vw]  h-[40vh] '/> 
        <h2 className='text-xl mb-10 md:text-2xl lg:text-5xl text-bold text-center -mt-[5px] lg:-mt-[90px] italic font-mono'>Shop Now</h2>
        <hr/>
    </div>
  )
}

export default TopHeader;