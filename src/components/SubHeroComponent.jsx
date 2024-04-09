import React from 'react';

function SubHeroComponent() {
  return (
    <div className="relative bg-cover bg-center h-screen m-2 bg-gray-200" style={{backgroundImage: 'url("/iphone15.png")'}}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="flex flex-col justify-center items-center text-black text-center relative z-10 top-5 md:top-10 bottom-10">
        <h1 className="text-5xl font-semibold mb-4 ">iPhone 15</h1>
        <h2 className="text-xl font-medium mb-4">New Camera. New Design. Newphoria</h2>
        <div className='mb-10'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8 mr-4">Learn More</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default SubHeroComponent;
