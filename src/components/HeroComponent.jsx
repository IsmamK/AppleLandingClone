import React from 'react';

function HeroComponent() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{backgroundImage: 'url("/iphonebg.jpg")'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">iPhone 15 Pro</h1>
        <h2 className="text-lg">Titanium. So Strong. So Light. So Pro</h2>
      </div>
    </div>
  );
}

export default HeroComponent;
