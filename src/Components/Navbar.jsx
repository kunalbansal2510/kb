import React, { useState, useEffect } from 'react';
import { Github, X, Linkedin, Download, Menu, X as CloseIcon } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    const words = ['Developer', 'Designer', 'Creator', 'Problem Solver'];
    
    const socialLinks = [
        { 
            name: "GitHub", 
            icon: <Github className="w-5 h-5" />, 
            link: "https://github.com", 
            color: "hover:text-gray-100",
            glow: "hover:shadow-gray-500/50",
            bg: "bg-gray-900"
        },
        { 
            name: "LinkedIn", 
            icon: <Linkedin className="w-5 h-5" />, 
            link: "https://linkedin.com", 
            color: "hover:text-blue-300",
            glow: "hover:shadow-blue-500/50",
            bg: "bg-blue-700"
        },
        { 
            name: "X", 
            icon: <X className="w-5 h-5" />, 
            link: "https://x.com", 
            color: "hover:text-black",
            glow: "hover:shadow-black/50",
            bg: "bg-black"
        }
    ];

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typing animation
    useEffect(() => {
        let currentIndex = 0;
        let currentText = '';
        let isDeleting = false;
        let typingSpeed = 100;

        const type = () => {
            const currentWord = words[currentWordIndex];
            
            if (isDeleting) {
                currentText = currentWord.substring(0, currentText.length - 1);
                typingSpeed = 50;
            } else {
                currentText = currentWord.substring(0, currentText.length + 1);
                typingSpeed = 100;
            }

            setTypedText(currentText);

            if (!isDeleting && currentText === currentWord) {
                typingSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        const timer = setTimeout(type, 1000);
        return () => clearTimeout(timer);
    }, [currentWordIndex]);

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20' 
                    : 'bg-transparent'
            }`}>
                <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
                    {/* Logo with enhanced animation */}
                    <div className='flex items-center gap-4'>
                        <div className='relative group cursor-pointer'>
                            <div className={`text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transition-all duration-500 hover:scale-110 ${
                                isScrolled ? 'text-3xl' : 'text-4xl'
                            }`}>
                                KB
                            </div>
                            
                            {/* Animated border */}
                            <div className='absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:scale-110 -z-10'></div>
                            
                            {/* Pulse effect */}
                            <div className='absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 animate-ping transition-all duration-1000 -z-20'></div>
                        </div>

                        {/* Typing animation text */}
                        <div className={`hidden md:block transition-all duration-500 ${
                            isScrolled ? 'opacity-0 scale-95' : 'opacity-100'
                        }`}>
                            <div className='flex items-center text-sm text-gray-600 font-medium'>
                                <span className='mr-2'>|</span>
                                <span className='min-w-[120px]'>
                                    {typedText}
                                    <span className='animate-pulse'>|</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex gap-6 items-center backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-lg bg-white/50'>
                        {/* Download Resume Button */}
                        <button className='group relative flex items-center gap-3 text-lg font-medium px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden'>
                            <div className='absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <Download className="w-5 h-5 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                            <span className='relative z-10'>Download Resume</span>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                        
                        {/* Social Icons */}
                        <div className='flex gap-3'>
                            {socialLinks.map((item, ind) => (
                                <a 
                                    key={ind} 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-3 rounded-full ${item.bg} transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 ${item.color} ${item.glow} hover:scale-110 hover:shadow-lg`}
                                    aria-label={item.name}
                                >
                                    <div className="relative z-10 text-white transition-all duration-300 group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    
                                    {/* Ring effect */}
                                    <div className='absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current group-hover:scale-125 transition-all duration-300 opacity-0 group-hover:opacity-60'></div>
                                    
                                    {/* Pulse effect */}
                                    <div className={`absolute inset-0 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 transition-all duration-500 ${item.bg}`}></div>
                                    
                                    {/* Tooltip */}
                                    <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap'>
                                        {item.name}
                                        <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45'></div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden p-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/20 hover:bg-white/70 transition-all duration-300'
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-xl'>
                    <div className='flex flex-col h-full p-6'>
                        {/* Header */}
                        <div className='flex justify-between items-center mb-12'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
                                KB
                            </div>
                            <button 
                                className='p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <CloseIcon className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>

                        {/* Mobile Content */}
                        <div className='flex-1 flex flex-col items-center justify-center space-y-8'>
                            {/* Typing animation for mobile */}
                            <div className='text-center mb-8'>
                                <div className='text-2xl font-bold text-gray-800 mb-2'>
                                    Kunal Bansal
                                </div>
                                <div className='text-lg text-gray-600 min-h-[24px]'>
                                    {typedText}
                                    <span className='animate-pulse'>|</span>
                                </div>
                            </div>

                            {/* Download Button */}
                            <button className='group flex items-center gap-3 text-lg font-medium px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full max-w-xs justify-center'>
                                <Download className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                                <span>Download Resume</span>
                            </button>

                            {/* Social Icons */}
                            <div className='flex gap-4 mt-8'>
                                {socialLinks.map((item, ind) => (
                                    <a 
                                        key={ind} 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-full ${item.bg} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.glow}`}
                                        aria-label={item.name}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                
                @keyframes blink {
                    0%, 50% { opacity: 1 }
                    51%, 100% { opacity: 0 }
                }
                
                .typing-animation {
                    animation: typing 3.5s steps(40, end), blink 1s infinite;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 2px solid;
                }
            `}</style>
        </>
    );
}