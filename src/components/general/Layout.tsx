import { Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react';
import BackToTop from './BackToTop'
import NavigationBar from './NavigationBar'
import MobileMenu from './MobileMenu'

const Layout = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bttVisible, setBttVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Update width on window resize
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu if entering desktop size
    useEffect(() => {
        if (width >= 768) { 
            setMobileMenuOpen(false);
        } 
    }, [width]);

    // Handle body overflow and navbar visibility when mobile menu is toggled
    useEffect(() => {
        if (mobileMenuOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuOpen, width]);

    // Handle navbar visibility on scroll
    useEffect(() => {
        let lastScrollY = window.scrollY;

        // Toggle Back to Top button visibility
        const toggleBttVisibility = () => {
            if (window.scrollY > 50 && !mobileMenuOpen) {
                setBttVisible(true);
            } else {
                setBttVisible(false);
            }
        };

        // Control navbar visibility based on scroll direction and position
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50 && !mobileMenuOpen) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        // Add scroll event listeners
        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('scroll', toggleBttVisibility);

        // Cleanup event listeners on unmount
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
    </>
  )
}

export default Layout