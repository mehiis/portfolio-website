import { Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react';
import BackToTop from './BackToTop'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [isVisible, setIsVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bttVisible, setBttVisible] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuOpen]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

            const toggleBttVisibility = () => {
            if (window.scrollY > 415 && !mobileMenuOpen) {
                setBttVisible(true);
            } else {
                setBttVisible(false);
            }
        };

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('scroll', toggleBttVisibility);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('scroll', toggleBttVisibility);
         };

    }, []);

  return (
    <>
        <NavigationBar isVisible={isVisible} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        <main className='mx-auto min-h-screen  min-w-[360px]'>
            <Outlet />
        </main>

        <BackToTop bttVisible={bttVisible} />

        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        <Footer />
    </>
  )
}

export default Layout
