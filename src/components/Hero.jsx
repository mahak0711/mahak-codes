import React from 'react';

export function Hero() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white p-8 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="bg-white rounded-3xl p-6 text-black max-w-sm">
        <div className="relative w-full h-64 mb-4">
          <img
            src="image.jpg"
            alt="Mahak Kankaria"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <h2 className="text-3xl font-bold mb-2">MAHAK KANKARIA</h2>
        
        <div className="flex justify-between text-[#ff6b00]">
          {/* <Dribbble size={24} />
          <Twitter size={24} />
          <Instagram size={24} />
          <Mail size={24} /> */}
        </div>
      </div>
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">
          FULL STACK
          <br />
          <span className="text-[#3a3a3a]">DEVELOPER</span>
        </h1>
        <p className="text-xl mb-8">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
        <div className="grid grid-cols-3 gap-8 mb-8">
          </div>
        
      </div>
    </div>


    );
}
