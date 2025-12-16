import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './views/Home'
import Blog from './views/Blog'
import NotFound from './views/NotFound'
import Layout from './components/Layout'
import Project from './views/Project'

function App() {

  return (
    <>
    <BrowserRouter basename='/~nikomeh/portfolio'>
    <Routes>
      <Route element={<Layout />}>
        {/* Define the routes for the application */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/project/:id" element={<Project />} />
        {/*<Route path="/blogs" element={<Blogs />} />*/}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
