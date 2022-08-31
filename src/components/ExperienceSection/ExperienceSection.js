import React, { useState } from 'react'
import experiences from '../../data/experiences';
import SubHeader from '../SubHeader'
import ExperienceDetailCard from './ExperienceDetailCard';
import ExperienceTabs from './ExperienceTabs';

const ExperienceSection = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className='mb-20 sm:my-20 pt-10 sm:pt-20 max-w-3xl mx-auto'  id='experience'>
            <SubHeader title='Experience' index={2} />

            <div className='sm:grid sm:grid-cols-7 gap-3'>
                <ExperienceTabs experiences={experiences} setCurrentTab={setCurrentTab} currentTab={currentTab} />
                <ExperienceDetailCard title={experiences[currentTab].title} company={experiences[currentTab].company}
                    duration={experiences[currentTab].duration} roles={experiences[currentTab].roles}
                    extra={experiences[currentTab].extra} />
            </div>
        </div>
    )
}





export default ExperienceSection