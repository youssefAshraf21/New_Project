import React, { useEffect, useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {codeExamples, floatingCards} from '../data/codeExamples';
import { LuSparkles } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";



function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTap , setActiveTap] = useState("App.jsx");
    const currentFloatingCard = floatingCards[activeTap];
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

        <div className='max-w-7xl mx-auto text-center relative w-full'>
            <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative'>
                <div>
                    <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
                        <LuSparkles  className='h-4 w-4 text-blue-500'/>
                        <span className='text-xs sm:text-sm text-blue-300'>Introducing CodeFlow AI</span>
                    </div>
                    <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight'>
                        <span className='bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent  mb-1 sm:mb-2'>
                            Code Faster
                        </span>
                        < br />
                        <span className='bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent  mb-1 sm:mb-2'>
                            Build Better
                        </span>
                        <br />
                        <span className='bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2'>
                            With Code Flow AI
                        </span>
                    </h1>
                    <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                        Accelerate your development workflow with intelligent code
                        completion, automated testing, and smart debugging. Ship
                        production-ready code 10x faster.
                    </p>  
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-30 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Watch Demo</span>
                </button>
            </div>  
                </div>
            {/*Code Editor */}
                <div className="relative order-2 w-full ">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                        <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-64 w-full sm:h-72 lg:h-96 border border-white/5">
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
                                        <SyntaxHighlighter language="jsx" 
                                        style={vscDarkPlus} 
                                        customStyle=
                                        {{
                                            margin: 0 ,
                                            padding: 4,
                                            fontSize: 11,
                                            lineHeight: 1.4 ,
                                            height: "100%",
                                            border: "1px solid #3c3c3c"
                                        }}>
                                            {codeExamples[activeTap]}
                                        </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                        {/* card float */}
                        <div className={` hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 ${floatingCards[activeTap].bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/15 shadow-2xl    `}>
                                <div className='flex items-center space-x-2 mb-2 '>
                                    <div className={`w-6 h-6 ${floatingCards[activeTap].iconColor} flex items-center justify-center text-sm font-bold`}>
                                        {currentFloatingCard.icon}
                                    </div>
                                    <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>{currentFloatingCard.title}</span>
                                </div>
                                <div className={`text-sm text   -left ${currentFloatingCard.contentColor}`}>{currentFloatingCard.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    )
}

export default Hero