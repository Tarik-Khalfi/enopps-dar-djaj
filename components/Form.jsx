import React from 'react'
import Image from 'next/image'
const Form = () => {
    return (
        <div className='py-12 px-5'>
            <Image className=' absolute right-0 top-0' src='/Vector26.png' alt='img' width={80} height={79} />
            <Image src='/Group 284.png' width={120} height={200}
                className=' absolute right-0 bottom-0 rotate-[269deg] ' alt='img' />
            <Image src='/Group 284.png' width={160} height={200}
                className=' absolute left-0 top-0 rotate-[90deg] ' alt='img' />
            <h3 className='text-2xl font-semibold text-center py-6'>Contact Form</h3>
            <form className=' flex flex-col space-y-5 w-full '>
                <input className='py-4 px-10 bg-[#E3C08D]   border-2 placeholder-cyan-50   outline-none' placeholder='Name' type="text" />
                <input className='py-4 px-10 bg-[#E3C08D]   border-2 placeholder-cyan-50   outline-none' placeholder='Email' type="text" />
                <div className='flex justify-between gap-4'>
                    <input className='py-4 px-10 w-full bg-[#E3C08D]   border-2 placeholder-cyan-50   outline-none' placeholder='Phone Number' type="text" />
                    <input className='py-4 px-10 w-full bg-[#E3C08D]   border-2  placeholder-cyan-50  outline-none' placeholder='Subject' type="text" />
                </div>
                <textarea className='py-2 px-10 h-[300px] bg-[#E3C08D]   border-2 placeholder-cyan-50   outline-none' placeholder='Message...' name="" id=""></textarea>
                <div className='m-auto'>
                    <button placeholder='submit' type='submit' className='py-5 mt-10 px-20 bg-white font-semibold text-xl text-[#E3C08D]'>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form