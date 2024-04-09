import React from 'react';

function Contents() {
  return (
    <div className="flex flex-wrap justify-center bg-white">
      {/* Block 1 */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 ">
        <div className="content-box relative bg-cover bg-center bg-black relative bg-no-repeat" style={{ backgroundImage: 'url("/ww_dc.jpg")', backgroundSize: '70%',backgroundPosition:'center' ,height:'512px'}}>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center relative top-96 text-24">
            <p>Apple Worldwide Developers Conference</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Learn More</button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/2 p-2 ">
        <div className="content-box relative bg-cover bg-center bg-gray-100 bg-no-repeat relative"  style={{ backgroundImage: 'url("/apple_vision_pro_image.jpg")', backgroundSize: '60%' ,height:'512px'}}>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center relative top-96 ">
            <h3 className="text-lg font-bold mb-2">Apple Vision Pro</h3>
            <p>Welcome to the era of spatial computing</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Learn More</button>
          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 ">
        <div className="content-box relative bg-cover bg-center bg-gray-100" style={{ backgroundImage: 'url("/ipad_image.png")', backgroundSize: "40%",backgroundRepeat: "no-repeat", backgroundPosition: "center bottom",height:'512px'}}>
          <div className="absolute h-32 inset-0 flex flex-col justify-center items-center text-white text-center text-black font-bold">
            <h3 className="text-lg font-bold mb-2 ">iPad</h3>
            <p>Loveable. Drawable. Magical</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Learn More</button>
          </div>
        </div>
      </div>

      {/* Block 3 */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 ">
        <div className="content-box relative bg-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url("/macbook_air_image.png")', backgroundSize: '75%' ,height:'512px',backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
          <div className="absolute h-32  text-black inset-0 flex flex-col justify-center items-center text-white text-center">
            <h3 className="text-lg font-bold mb-2">Macbook Air</h3>
            <p>Lean. Mean. M3 Machine. </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Learn More</button>
          </div>
        </div>
      </div>

      {/* Block 4 */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 ">
      <div className="content-box relative bg-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url("/card_image.png")', backgroundSize: '50%' ,height:'512px',backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
          <div className="absolute h-32 text-black  inset-0 flex flex-col justify-center items-center text-white text-center">
            <h3 className="text-lg font-bold mb-2">Apple Card</h3>
            <p>Upto 3% cashback with each purchase</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Learn More</button>
          </div>
        </div>
      </div>

      {/* Block 5 */}
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 ">
      <div className="content-box relative bg-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url("/trade_in_image.png")', backgroundSize: '100%' ,height:'512px',backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
          <div className="absolute h-32 text-black inset-0 flex flex-col justify-center items-center text-white text-center">
            <h3 className="text-lg font-bold mb-2">Trade In</h3>
            <p>Get $180-$680 in credit when you trade in iPhone 11 or higher</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Learn More</button>
          </div>
        </div>
      </div>

      {/* Block 6 */}
      
    </div>
  );
}

export default Contents;
