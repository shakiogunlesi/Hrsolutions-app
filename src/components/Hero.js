import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero text-white h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to HR Solutions</h1>
        <p className="text-xl mb-8">Your Partner in Human Capital Management</p>
        <a href="#about" className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100 transition-all">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
