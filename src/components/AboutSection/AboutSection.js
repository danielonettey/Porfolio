import React from 'react'
import SubHeader from '../SubHeader'
import Company1 from '../../assets/images/Company1.png'
import Company2 from '../../assets/images/Company2.png'
import Company3 from '../../assets/images/Company3.png'
import Company4 from '../../assets/images/Company4.png'
import Company5 from '../../assets/images/Company5.png'
import Company6 from '../../assets/images/Company6.png'
import Company7 from '../../assets/images/Company7.png'
import Company8 from '../../assets/images/Company8.png'
import Company9 from '../../assets/images/Company9.png'
import Company10 from '../../assets/images/Company10.png'

const AboutSection = () => {
    return (
        <div className='sm:pt-20' id='about'>
            <SubHeader title='About' index={1} />

            <div className='space-y-1.5 text-xs sm:text-base'>
                <p>
                    I am an early career graduate with a concentration in business
                    administration - Corporate Finance & Investments from the prestigious
                    Ashesi University  and a minor in biomedical engineering (designing safe
                    biomedical devices) from the University of Pisa in Italy.
                </p>

                <p>
                    Over the years i have either  built or helped ventures
                    to become successful whiles interacting key stakeholders;
                    foreign missions, venture capitalists, angel investors, bank innovation hubs,
                    venture acclelerators across EMEA to develop robust business structures and financial models.
                </p>

                <p>
                Kindly find attached a number of companies I have worked and stakeholders interactions inclusive:
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-7 sm:gap-10 mt-10 inner:h-10 inner:sm:h-20 inner:md:h-28'>
                <img src={Company1} alt="React" />
                <img src={Company2} alt="Flutter" />
                <img src={Company3} className="rounded-3xl" alt="Django" />
                <img src={Company4} alt="MySQL" />
                <img src={Company5} alt="Java" />
                <img src={Company6} alt="VBA" />
                <img src={Company8} alt="VBA" />
                {/* <img src={Company7} alt="Python" /> */}
                
                <img src={Company9} alt="HTML & CSS" />
                <img src={Company10} alt="JavaScript" />
                {/* <img src={CPlusPlusIcon} alt="React" />
                <div className='h-28 text-center flex flex-col justify-between'>
                    <img src={GitHubIconLG} className="h-3/4 object-contain" alt="GitHub" />
                    <p className='font-medium'>GitHub</p>
                </div>
                <div className='h-28 text-center flex flex-col justify-between'>
                    <img src={FigmaIcon} className="h-3/4 object-contain" alt="Figma" />
                    <p className='font-medium'>Figma</p>
                </div>

                <img src={NetlifyIcon} alt="Netlify" />
                <img src={AmplifyIcon} alt="Amplify" /> */}
            </div>
        </div>
    )
}

export default AboutSection