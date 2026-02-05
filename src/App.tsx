const baseName = import.meta.env.BASE_URL;
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './views/Home'
import Blogs from './views/Blogs'
import NotFound from './components/general/NotFound'
import Layout from './components/general/Layout'
import Blog from './views/Blog'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <>
    <BrowserRouter basename={baseName}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>

    
    <Analytics />
    <SpeedInsights />
    </>
  )
}

export default App
