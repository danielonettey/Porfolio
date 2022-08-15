import React from 'react'
import projects from '../../data/projects'
import ProjectCard from '../ProjectCard'
import SubHeader from '../SubHeader'

const ProjectSection = () => {
    return (
        <div className='sm:my-20 sm:pt-20' id='projects'>
            <SubHeader title='Projects' index={3} />
            
            <div className='space-y-10 sm:space-y-32'>
                {
                    projects.map((project, index) => (
                        <ProjectCard right={index % 2 === 0} image={project.image} name={project.name} github={project.github}
                            demo={project.demo} description={project.description} resources={project.resources} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectSection