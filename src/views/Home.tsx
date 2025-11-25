import React from 'react'
import { Tools } from '../components/Tools'
import { Hero } from '../components/Hero'
import Personal from '../components/Personal'
import Me from '../components/Me'
import Education from '../components/Education'
import Work from '../components/work'

const Home = () => {
  return (
    <>
      <Hero />
      <Personal />
      <Work />
      <Education />
      <Tools />
    </>
  )
}

export default Home
