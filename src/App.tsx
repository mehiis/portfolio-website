import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './components/general/Layout';

const Home = lazy(() => import('./views/Home'));
const Blogs = lazy(() => import('./views/Blogs'));
const Blog = lazy(() => import('./views/Blog'));
const NotFound = lazy(() => import('./components/general/NotFound'));
const Loading = lazy(() => import('./components/general/Loading'));

const Chapter = lazy(() => import('./views/korea/Chapter'));
const Write = lazy(() => import('./views/korea/Write'));
const Korea = lazy(() => import('./views/Korea'));

const baseName = import.meta.env.BASE_URL;

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={baseName}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/blogs/:id" element={<Blogs />} />
              <Route path="/korea" element={<Korea />} />
              <Route path="/korea/chapter/:id" element={<Chapter />} />
              <Route path="/korea/write/:id" element={<Write />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
