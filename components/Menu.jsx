import React from 'react'
import Image from 'next/image'
const Menu = () => {
    return (
        <section className='bg-[#0D1518]   py-20'>
            <div className='container relative  flex justify-between items-center'>
                <div className='bg-white clipo2 py-10 px-14 z-50 space-y-9 '>
                    <h3 className='text-[#F09804E5]  text-4xl font-bernier font-semibold'>Opening Hours</h3>
                    <div className='text-[#808080] space-y-4'>
                        <div className='flex justify-between'>
                            <p className='font-medium   text-xl text-black'>Monday</p>
                            <span>:9:00am - 23:00pm</span>
                        </div>
                        <div className='flex w-[20dvw] justify-between'>
                            <p className='font-medium  text-xl text-black'>Tuesday</p>
                            <span>:9:00am - 23:00pm</span>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium  text-xl text-black'>Wednesday</p>
                            <span>:9:00am - 23:00pm</span>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium  text-xl text-black'>Thursday</p>
                            <span>:9:00am - 23:00pm</span>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium  text-xl text-black'>Friday</p>
                            <span>:9:00am - 23:00pm</span>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium  text-xl text-black'>Saturday</p>
                            <span>:9:00am - 23:00pm</span>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium  text-xl text-black'>Sunday</p>
                            <span className='text-[#FF6363]'>Closed</span>
                        </div>

                    </div>

                </div>
                <div className=' relative right-32  space-y-6'>
                    <Image alt='ll' src='/_DSC4817.jpg' width={400} height={400}
                        className='w-[700px] clipo3' />
                    <Image alt='ll' src='/_DSC4776.jpg' width={400} height={400}
                        className='w-[700px] clipo4' />
                </div>
                <div className='relative right-[102px] mt-20  z-10'>
                    <Image alt='ll' src='/Group 5.png' width={400} height={400}
                        className='w-[300px] h-[100px] z-20 absolute -rotate-[45deg] -left-[140px] ' />
                    <Image alt='ll' src='/_DSC4819.jpg' width={400} height={400}
                        className='w-[500px] mt-5 clipo ' />
                    <Image src='/Group 284.png' width={250} height={300}
                        className=' absolute -right-20 -bottom-10 rotate-[270deg]   ' alt='img' />
                </div>
            </div>
        </section>
    )
}

export default Menu