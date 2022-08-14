import React from 'react'
import SubHeader from '../SubHeader'
import ReactIcon from '../../assets/icons/ReactIcon.png'
import JavaScriptIcon from '../../assets/icons/JavaScriptIcon.png'
import TailwindCSSIcon from '../../assets/icons/TailwindCSSIcon.png'
import HTMLCSSIcon from '../../assets/icons/HTMLCSSIcon.png'
import GitHubIconLG from '../../assets/icons/GitHubIconLG.png'
import FigmaIcon from '../../assets/icons/FigmaIcon.png'
import PythonIcon from '../../assets/icons/PythonIcon2.png'
import JavaIcon from '../../assets/icons/JavaIcon.png'
import CPlusPlusIcon from '../../assets/icons/CPlusPlusIcon2.png'
import FlutterIcon from '../../assets/icons/FlutterIcon2.png'
import MySQLIcon from '../../assets/icons/MySQLIcon.png'
import VBAIcon from '../../assets/icons/VBAIcon.png'

import DjangoIcon from '../../assets/icons/django.jpeg'



// , , Java, , , C++, 


const AboutSection = () => {
    return (
        <div className='mb-20 sm:mb-20 sm:pt-20'>
            <SubHeader title='About' index={1} />

            <div className='space-y-1.5 text-xs sm:text-base'>
                <p>
                    Hello! My name is Daniel and I enjoy creating things that live on the internet.
                    My interest in web development started back in 2012 when I decided to try editing
                    custom Tumblr themes — turns out hacking together a custom reblog button taught me
                    a lot about HTML & CSS!
                </p>
                <p>
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                    a start-up, a huge corporation, and a student-led design studio. My main focus these
                    days is building accessible, inclusive products and digital experiences at Upstatement
                    for a variety of clients.
                </p>
                <p>
                    I also recently launched a course that covers everything you need to build a web app with
                    the Spotify API using Node & React.
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-7 sm:gap-10 mt-10 inner:h-10 inner:sm:h-20 inner:md:h-28'>
                <img src={ReactIcon} className="" />
                <img src={FlutterIcon} className="bg-white p-2" /> 
                <img src={DjangoIcon} className="rounded-3xl" />
                <img src={MySQLIcon} />
                <img src={JavaIcon} />
                <img src={VBAIcon} />
                <img src={PythonIcon} />  
                <div className='h-28 text-center flex flex-col justify-between'>
                    <img src={TailwindCSSIcon} className="h-2/3" />
                    <p className='font-medium'>TailWind CSS</p>
                </div>
                <img src={HTMLCSSIcon} />
                <img src={JavaScriptIcon} />
                <img src={CPlusPlusIcon} />
                <div className='h-28 text-center flex flex-col justify-between'>
                    <img src={GitHubIconLG} className="h-3/4 object-contain" />
                    <p className='font-medium'>GitHub</p>
                </div>
                <div className='h-28 text-center flex flex-col justify-between'>
                    <img src={FigmaIcon} className="h-3/4 object-contain" />
                    <p className='font-medium'>Figma</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection