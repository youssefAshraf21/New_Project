import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {codeExamples} from '../data/codeExamples';

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTap , setActiveTap] = useState("App.jsx");

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className='relative min-h-screen flex items-center justify-center pt-16 sm:pt20 px-4 sm:px-6 lg:px-8 overflow-hidden '>
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                    background: `radial-gradient(
                    600px circle at ${mousePosition.x}px ${mousePosition.y}px,
                    rgba(50, 130, 246, 0.2),
                    transparent 40%
                )`,
            }}>
                </div>

                <div className='absolute bg-blue-500/10  top-20 left-5 sm:left-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bg-cyan-500/10  bottom-20 right-5 sm:right-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse'></div>

            {/*Code Editor */}

                <div className="relative order-2 w-full">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                        <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-64 w-full sm:h-72 lg:h-96 border border-white/5">
                            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                <div className="flex items-center  space-x-1 md:space-x-2">
                                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                    <h2 className="text-gray-300 text-sm ml-3 sm:text-sm ">CodeFlow AI</h2>
                                    </div>
                                    <div className="flex items-center">
                                    <span className="bg-blue-700 text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mr-0.5">
                                    AI
                                    </span>
                                    <MdOutlineArrowDropDown className="text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                            </div>
                            <div className='p-3 sm:p-4 relative h-full'>
                                <div className='flex space-x-1 sm:space-x-2 mb-3 md:mb-4 overflow-x-auto'>
                                    <button 
                                    onClick={() => setActiveTap("App.jsx")}
                                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                                        ${ activeTap === "App.jsx" 
                                        ?
                                        `bg-blue-500/30 text-white border border-blue-400/20 `
                                        :
                                        `bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10`}
                                    
                                        transition-all duration-200 whitespace-nowrap`}>
                                            app.jsx
                                        </button>

                                    <button 
                                    onClick={() => setActiveTap("Hero.jsx")}
                                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                                        ${ activeTap === "Hero.jsx" 
                                        ?
                                        `bg-blue-500/30 text-white border border-blue-400/20 `
                                        :
                                        `bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10`}
                                    
                                        transition-all duration-200 whitespace-nowrap`}>Hero.jsx
                                    </button>
                                    <button 
                                    onClick={() => setActiveTap("Navbar.jsx")}
                                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                                        ${ activeTap === "Navbar.jsx" 
                                        ?
                                        `bg-blue-500/30 text-white border border-blue-400/20 `
                                        :
                                        `bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10`}
                                    
                                        transition-all duration-200 whitespace-nowrap`}>Navbar.jsx
                                    </button>
                                </div>
                                {/* Code */}
                                <div className='relative overflow-hidden grow'>
                                        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                                            {codeExamples[activeTap]}
                                        </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>  
    )
}

export default Hero