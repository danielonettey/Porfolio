import React from 'react'
import DynamicText from './DynamicText'
import Headshot from '../../assets/images/Headshot.jpg'

const HeaderSection = () => {
    return (
        <div className='space-y-5 pt-28 pb-16 sm:pt-28 lg:min-h-screen'>
            <p className='text-xs sm:text-sm md:text-xl text-secondary font-medium'>Hi, my name is</p>
            <DynamicText subIndex={22} />
            <p className='text-xs sm:text-sm md:text-xl md:leading-8 max-w-4xl'>
                I love working with start-ups, venture accelerators  help build  ecosystems
                across <span className='text-secondary'> Fintech</span>, <span className='text-secondary'>Biomedical Sciences </span>
                and <span className='text-secondary'>Ed-Tech</span> in EMEA. Whiles doing this i believe structured financial
                services for innovators and entrepreneurs are key to their success and the overall innovation economy.
            </p>

            <div>
                <img src={Headshot} className="sm:w-3/5 mx-auto" />
            </div>
        </div>
    )
}

export default HeaderSection