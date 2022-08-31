import React from 'react'

const ContactSection = () => {
    return (
        <div className='space-y-2 max-w-2xl mt-20 sm:mt-40 pb-20 sm:pb-40 mx-auto text-center'>
            <p className='text-secondary font-medium text-xs sm:text-lg'>What's Next?</p>
            <p className='text-2xl sm:text-5xl pb-3 font-semibold'>Get In Touch With Me</p>
            <p className='text-[#8A93AD] text-sm sm:text-base'>
            I am currently looking forward to make an early career entry into the venture capital 
            and private equity industry supporting innovators and entrepreneurs of today through financial services.
            </p>
            {/* Contact Me button  */}
            <div className='pt-5 sm:pt-10'>
                <a href='mailto:ishmael.oaboagye@gmail.com ' className='font-medium border border-secondary text-secondary px-6 rounded py-3 text-xs sm:text-base'>
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default ContactSection