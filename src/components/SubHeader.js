import React from 'react'

const SubHeader = ({title, index}) => {
    return (
        <div className='flex items-center space-x-5 mb-3 sm:mb-10 '>
            <p className='text-2xl sm:text-4xl font-semibold flex-none'>
                <span className='text-secondary '>0{index}. </span>
                {title}
            </p>
            <span className='h-px w-full bg-white/20'></span>
        </div>
    )
}

export default SubHeader