const baseName = import.meta.env.BASE_URL;
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './views/Home'
import Blogs from './views/Blogs'
import NotFound from './components/general/NotFound'
import Layout from './components/general/Layout'
import Blog from './views/Blog'
import Chapter from './views/korea/Chapter';
import Write from './views/korea/Write';
import Korea from './views/Korea';
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
    <HelmetProvider>
      <BrowserRouter basename={baseName}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs/:id" element={<Blogs />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/korea/chapter/:id" element={<Chapter />} />
            <Route path="/korea/write/:id" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
