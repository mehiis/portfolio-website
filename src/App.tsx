import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './views/Home'
import Blog from './views/Blog'
import Blogs from './views/Blogs'
import NotFound from './views/NotFound'
import Layout from './components/Layout'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {/* Define the routes for the application */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
