import React from 'react'

const ContactSection = () => {
    return (
        <div className='space-y-2 max-w-2xl mt-20 sm:mt-40 pb-20 sm:pb-40 mx-auto text-center'>
            <p className='text-secondary font-medium text-xs sm:text-lg'>What's Next?</p>
            <p className='text-2xl sm:text-5xl pb-3 font-semibold'>Get In Touch With Me</p>
            <p className='text-[#8A93AD] text-sm sm:text-lg'>
                I am currently looking forward to joining an impact driven organization
                with a strong vision and clear direction. Kindly reach out to me and
                I will do my best toget back to you as soon as possible.
            </p>
            {/* Contact Me button  */}
            <div className='pt-5 sm:pt-10'>
                <a href='mailto:dnettey3@gmail.com' className='font-medium border border-secondary text-secondary px-6 rounded py-3 text-xs sm:text-base'>
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default ContactSection