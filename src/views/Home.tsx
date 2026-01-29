import Hero  from '../components/homepage/Hero'
import Tools from '../components/homepage/Tools'
import Personal from '../components/homepage/Personal'
import Me from '../components/homepage/Me'
import Education from '../components/homepage/Education'
import Work from '../components/homepage/Work'

const Home = () => {
  return (
    <>
      <Hero />
      <Personal />
      <Work />
      <Education />
      <Tools />
      <Me />
    </>
  )
}

export default Home
