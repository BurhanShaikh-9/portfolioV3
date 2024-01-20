
import React, { Suspense } from 'react'
import { Welcome } from '../client-side/welcome/welcome'
import { About } from '../client-side/about-us/about'
import { Skill } from '../client-side/skills/skill'
import { Project } from '../client-side/projects/project'
import { Contact } from '../client-side/contact-us/contact'
import Loader from './loader'




const PageRoot = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
      <main className="app">
        <div id="WelcomeMain" className='section welcome '><Welcome /></div>
        <div id="AboutMain" className='section about '> <About /> </div>
        <div id="SkillMain" className='section skill '> <Skill /> </div>
        <div id="ProjectMain" className='section project '> <Project /> </div>
        <div id="ContactMain" className='section contact '> <Contact /> </div>
      </main>

      </Suspense>
    </React.Fragment>
  )
}

export default PageRoot