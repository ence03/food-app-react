import React from "react";
import Food1 from '../assets/food-1.jpg'
import Food2 from '../assets/food-2.jpg'
import Food3 from '../assets/food-3.jpg'

function HeadlineCards() {
  return (
    <div className="w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Cards */}
      <div className="rounded-xl relative">
         {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
            <p className="px-2">Through 8/26</p>
            <button className="border-white bg-white text-black ml-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="object-cover max-h[160px] md:max-h-[200px] w-full rounded-xl" src={Food1} alt=""/>
      </div>
       {/* Cards */}
       <div className="rounded-xl relative">
         {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black ml-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="object-cover max-h[160px] md:max-h-[200px] w-full rounded-xl" src={Food2} alt=""/>
      </div>
       {/* Cards */}
       <div className="rounded-xl relative">
         {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Food Culture</p>
            <p className="px-2">Wide Variety to choose</p>
            <button className="border-white bg-white text-black ml-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="object-cover max-h[160px] md:max-h-[200px] w-full rounded-xl" src={Food3} alt=""/>
      </div>
    </div>
  );
}

export default HeadlineCards;
