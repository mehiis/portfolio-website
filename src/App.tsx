const baseName = import.meta.env.BASE_URL;
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './views/Home'
import Blogs from './views/Blogs'
import NotFound from './components/general/NotFound'
import Layout from './components/general/Layout'
import Blog from './views/Blog'
import Chapter from './views/korea/Chapter';
import Korea from './views/Korea';

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
        <Route path="/korea" element={<Korea />} />
        <Route path="/korea/chapter/:id" element={<Chapter />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
