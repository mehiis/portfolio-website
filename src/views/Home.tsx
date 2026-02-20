import Education from '../components/homepage/Education'
import Hero  from '../components/homepage/Hero'
import Me from '../components/homepage/Me'
import Personal from '../components/homepage/Personal'
import Tools from '../components/homepage/Tools'
import Work from '../components/homepage/Work'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Hero />
      <Personal />
      <Work />
      <Education />
      <Tools />
      <Me />
    </div>
  )
}

export default Home
