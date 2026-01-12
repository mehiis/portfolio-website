import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './views/Home'
import Blogs from './views/Blogs'
import NotFound from './views/NotFound'
import Layout from './components/Layout'
import Article from './views/Article'

function App() {

  return (
    <>
    <BrowserRouter basename='/~nikomeh/portfolio'>
    <Routes>
      <Route element={<Layout />}>
        {/* Define the routes for the application */}
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
