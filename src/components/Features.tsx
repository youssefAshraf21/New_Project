import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const  features = [
    {
    title: "AI Code Completion",
    description: "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    code: `function handleSubmit() {
  // AI suggests next line
    const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left"
},
    {
    title: "AI Code Completion",
    description:  "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    code: `describe("User Authentication", () => {
  // Auto-generated tests
    it("should login successfully", () => {
    // Test implementation
    })
})`,
    imagePosition: "right"
},
    {
    title: "AI Code Completion",
    description: "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    code: `// AI suggests fix:
    const result = await processData(input)
    // Fixed: Added await keyword`,
    imagePosition: "left"
}]

type Feature = typeof features[number]; 

function Features() {

    return (
        <section id="Features"
        className='relative py-16 sm:py-20 px-10 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center  mb-12 sm:mb-16 lg:mb-20 ">
                    <h2 className="text-5xl font-bold mb-4 sm:text-4xl md:text-5xl lg:text-6xl leading-16  ">
                        <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent md:mb-6">
                            Your Complete Development 
                        </span>
                        <br />
                        <span className='bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent '>
                            WorkFlow
                        </span>
                    </h2>
                </div>
                <div className="space-y-16 sm:space-y-20 lg:space-y-36">
                    {features.map((feature: Feature, index: number) => (
                        <div 
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div
                                    className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 
                                            rounded-xl sm:rounded-2xl transition-all duration-500"
                                    />
                                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                                                rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border
                                                group-hover:border-blue-600/50 transition-all duration-300">
                                    <div className='bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs md:text-sm '>
                                        <div className='flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4'>
                                            <div className="flex items-center  space-x-1 md:space-x-2">
                                                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                                                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className=" text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                                                {feature.title}
                                            </span>
                                        </div>
                                        <div>
                                            <SyntaxHighlighter language="jsx" 
                                        style={vscDarkPlus} 
                                        customStyle=
                                        {{
                                            margin: 0 ,
                                            background: "transparent",
                                            padding: 4,
                                            fontSize: "0.75 rem",
                                            lineHeight: 1.4 ,
                                            height: "100%"
                                        }}
                                        wraplines={true}
                                        >
                                        
                                            {feature.code}
                                        </SyntaxHighlighter>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                        <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                                            <h3 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">{feature.title}</h3>
                                            <p className="text-gray-300 text-base  sm:text-lg leading-relaxed ">{feature.description}</p>
                                        </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features