import logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { MdClose } from "react-icons/md";

function Navbar() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-14 sm:h-16 lg:h-20'>
                <div className='flex items-center space-x-2 md:space-x-3 lg:space-x-4 group cursor-pointer' >
                <div>
                    <img src={logo} alt="Logo" className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' onClick={scrollToTop}/>
                </div>
                <div className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                    <span className='text-white' onClick={scrollToTop}>Code</span>
                    <span className='text-blue-500' onClick={scrollToTop}>Flow</span>
                </div>
            </div>
            {/*link */}
            <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                <a href="#Features" onClick={(e) => handleNavClick(e, 'Features')} className='text-gray-300 hover:text-white text-sm lg:text-base'>
                    Features
                </a>
                <a href="#Pricing" onClick={(e) => handleNavClick(e, 'Pricing')} className='text-gray-300 hover:text-white text-sm lg:text-base'>
                    Pricing
                </a>
                <a href="#Testimonials" onClick={(e) => handleNavClick(e, 'Testimonials')} className='text-gray-300 hover:text-white text-sm lg:text-base'>
                    Testimonials
                </a>
            </div>
            {/*button */}
            <button className='md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            onClick={() =>setMobileMenuOpen((prev) => !prev)}>
                { mobileMenuOpen ? (<MdClose />) : (
                <FiMenu className='w-5 h-5 sm:w-6 sm:h-6 '/>
                )
                }   
            </button>
            </div>
        </div>
        {mobileMenuOpen && 
            <div className='md:hidden flex flex-col items-center bg-slate-900/95 backdrop-blur-lg p-4 border-t border-slate-800 animate-in slide-in-from-top duration-300'>
                <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 '>
                    <a href="#Features"  className='block text-gray-300 hover:text-white text-sm lg:text-base'
                    onClick={() => setMobileMenuOpen(false)}>
                        
                        Features
                    </a>
                    <a href="#Pricing" className='block text-gray-300 hover:text-white text-sm lg:text-base'
                    onClick={() => setMobileMenuOpen(false)}>
                        Pricing
                    </a>
                    <a href="#Testimonials" className='block text-gray-300 hover:text-white text-sm lg:text-base'
                    onClick={() => setMobileMenuOpen(false)}>
                        Testimonials
                    </a>
                </div>
            </div>
        }
    </nav>
    )
}

export default Navbar
