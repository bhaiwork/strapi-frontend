import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='md:mt-[100px] mt-[50px]  w-full mx-[100px] md:mx-[10px] lg:mx-[10px]'>
       <Image src="/construction.jpg" alt=" " width={1200} height={200} className='object-none object-center w-[100vw]  h-[50vh]'/> 
        <h2 className='text-xl md:text-2xl lg:text-5xl text-bold text-center -mt-[5px] lg:-mt-[20px] italic font-mono'>Shop Now</h2>
        <hr/>
    </div>
  )
}

export default TopHeader;