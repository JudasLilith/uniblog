import React, { useState, useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  offset: number;
  depth: number;
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  offset,
  depth,
  children,
  className = '',
}) => {
  return (
    <div
      style={{
        transform: `translateY(${offset * depth}px)`,
        transition: 'transform 0.1s ease-out',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default function ParallaxWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-gray-900">
        <ParallaxSection offset={scrollY} depth={0.5}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </ParallaxSection>

        <ParallaxSection offset={scrollY} depth={0.2}>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Parallax Scroll
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience smooth, immersive parallax effects as you scroll through this modern website
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Explore →
            </button>
          </div>
        </ParallaxSection>
      </section>

      {/* About Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <ParallaxSection offset={scrollY} depth={0.3}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold">About This Site</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                This website showcases modern parallax scrolling effects using React and Tailwind CSS. The parallax technique creates depth by moving different layers at different speeds as you scroll.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Each section moves at a different depth level, creating a rich, immersive visual experience that engages users and adds sophistication to web design.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="px-6 py-3 bg-blue-600 rounded-lg">
                  <p className="font-bold">Fast Parallax</p>
                </div>
                <div className="px-6 py-3 bg-purple-600 rounded-lg">
                  <p className="font-bold">Smooth Motion</p>
                </div>
              </div>
            </div>
          </ParallaxSection>

          <ParallaxSection offset={scrollY} depth={0.15}>
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform -rotate-6 opacity-75"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-xl font-bold">Visual Magic</p>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto w-full">
          <ParallaxSection offset={scrollY} depth={0.25}>
            <h2 className="text-5xl font-bold text-center mb-16">Features</h2>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                depth: 0.2,
                title: 'Smooth Scrolling',
                description: 'Silky smooth parallax effects that respond to scroll position',
                icon: '🎯',
              },
              {
                depth: 0.15,
                title: 'Responsive Design',
                description: 'Works beautifully on desktop, tablet, and mobile devices',
                icon: '📱',
              },
              {
                depth: 0.1,
                title: 'Modern Aesthetics',
                description: 'Contemporary design with gradient colors and animations',
                icon: '🎨',
              },
            ].map((feature, idx) => (
              <ParallaxSection key={idx} offset={scrollY} depth={feature.depth}>
                <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 h-full">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto w-full">
          <ParallaxSection offset={scrollY} depth={0.3}>
            <h2 className="text-5xl font-bold text-center mb-16">Visual Showcase</h2>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { delay: 0, color: 'from-blue-500 to-purple-600' },
              { delay: 1, color: 'from-purple-500 to-pink-500' },
              { delay: 2, color: 'from-pink-500 to-red-500' },
              { delay: 3, color: 'from-red-500 to-orange-500' },
            ].map((item, idx) => (
              <ParallaxSection key={idx} offset={scrollY} depth={0.2 - idx * 0.03}>
                <div
                  className={`h-64 bg-gradient-to-br ${item.color} rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌟</div>
                    <p className="text-xl font-bold">Gallery Item {idx + 1}</p>
                  </div>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-blue-900 to-gray-900">
        <ParallaxSection offset={scrollY} depth={0.25}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-2xl text-gray-300 mb-12">
              Build stunning parallax websites with React and modern web technologies
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 mb-8">
              Get Started Now
            </button>
            <div className="text-gray-500 pt-8 border-t border-gray-700 mt-8">
              <p>© 2024 Parallax Website. Created with React & Tailwind CSS</p>
            </div>
          </div>
        </ParallaxSection>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
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
