import React, {useState} from "react";
import {
  BsMenuButtonWide,
  BsSearch,
  BsCartFill,
  BsFillFileExcelFill,
  BsTruck,
  BsHeartFill,
  BsWalletFill,
  BsQuestionCircleFill,
  BsTagsFill,
  BsChatHeartFill,
  BsPeopleFill
} from "react-icons/bs";

function Navbar() {
    const [nav, setNav] =useState(false);

  return (
    <div className="w-full mx-auto flex justify-between items-center p-4">
      {/*left side*/}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <BsMenuButtonWide size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Ence <span className="font-bold">Food</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/*search input*/}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[220px] sm:w-[350px] lg:w-[500px] ">
        <BsSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : '' } 
      

      {/* Side Drawer Menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <BsFillFileExcelFill
            onClick={()=> setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Ence <span className="font-bold">Food</span>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex items-center"><BsTruck className="mr-4"/>Orders</li>
              <li className="text-xl py-4 flex items-center"><BsHeartFill className="mr-4"/>Favorites</li>
              <li className="text-xl py-4 flex items-center"><BsWalletFill className="mr-4"/>Wallet</li>
              <li className="text-xl py-4 flex items-center"><BsQuestionCircleFill className="mr-4"/>Help</li>
              <li className="text-xl py-4 flex items-center"><BsTagsFill className="mr-4"/>Promotions</li>
              <li className="text-xl py-4 flex items-center"><BsChatHeartFill className="mr-4"/>Best One</li>
              <li className="text-xl py-4 flex items-center"><BsPeopleFill className="mr-4"/>Invite Friends</li>
            </ul>
          </nav>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
