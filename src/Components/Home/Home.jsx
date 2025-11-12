import React, { useEffect, useRef } from 'react';

export default function Home() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Add fade-in animation on load
    const elements = [headerRef.current, imageRef.current, contentRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="inline-block animate-fade-in">Kunal</span>{' '}
            <span className="text-blue-600 inline-block animate-fade-in animation-delay-200">
              Bansal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light animate-fade-in animation-delay-400">
            Full Stack Developer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full animate-scale-x"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div 
            ref={imageRef}
            className="w-full lg:w-1/2 flex justify-center opacity-0 transform translate-x-8 transition-all duration-700 ease-out"
          >
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full overflow-hidden shadow-2xl relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dk3vuqnrr/image/upload/v1758795276/samples/look-up.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-float animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-float animation-delay-2000"></div>
              
              {/* Border animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-spin-slow">
                <div className="absolute inset-2 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div 
            ref={contentRef}
            className="w-full lg:w-2/3 space-y-8 opacity-0 transform -translate-x-8 transition-all duration-700 ease-out"
          >
            {/* About Me */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center group">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse group-hover:animate-ping"></span>
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate full-stack developer with 5+ years of experience creating
                digital solutions that blend beautiful design with robust functionality.
                I specialize in React, Node.js, and modern web technologies, delivering
                exceptional user experiences that drive business growth.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  Download Resume
                  <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}