import React from 'react'
import { BadgeCheckIcon } from '@heroicons/react/outline'

const ExperienceDetailCard = ({ title, company, duration, roles, extra }) => {
    return (
        <div className='sm:col-span-5 flex flex-col justify-between mt-5 sm:mt-0'>
            <div>
                <p className='pb-0.5 sm:text-xl'>
                    {title} <span className='text-secondary font-semibold'>@ {company}</span>
                </p>
                <p className='text-white/50 text-xs sm:text-sm pb-3 sm:pb-5'>
                    {duration}
                </p>

                <div className='space-y-3 sm:space-y-4'>
                    {
                        roles.map((role, index) => (
                            <div className='flex space-x-2.5 items-start' key={index}>
                                <BadgeCheckIcon className='w-4 sm:w-5 mt-0.5 text-secondary flex-none' />
                                <p className='text-white/80 text-xs sm:text-sm'>
                                    {role}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <p className='text-xs font-medium text-right text-secondary pt-2'>{extra}</p>

        </div>
    )
}

export default ExperienceDetailCard