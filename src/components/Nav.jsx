import React from "react";
import logo from "../assets/Dubnex-Logo.png";
import down from "../assets/down.png";
const Nav = () => {
  return (
    <div className="w-customW1440 bg-customBlack h-36 p-12 flex justify-between items-center fixed z-20">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="w-[947px] h-12 text-[#E6E6E6] flex items-center justify-center gap-x-10 cursor-pointer">
        <li className="hover:text-[#99ffff] h-10 leading-10">خرید آسان</li>
        <li className="hover:text-[#99ffff] flex gap-x-3 h-10 leading-10">معامله<img className="w-6 h-6 mt-2" src={down} alt="down" /></li>
        <li className="hover:text-[#99ffff] h-10 leading-10">قیمت ارز دیجیتال  </li>
        <li className="hover:text-[#99ffff] flex gap-x-3 h-10 leading-10">امکانات<img className="w-6 h-6 mt-2" src={down} alt="down" /></li>
        <li className="hover:text-[#99ffff] flex gap-x-3 h-10 leading-10">آموزش<img className="w-6 h-6 mt-2" src={down} alt="down" /></li>
      <div className="w-24 h-full flex justify-center items-center text-[#5EEAE1] bg-gradient-to-l from-[#134E4A] to-[rgba(19, 78, 74, 0)] rounded-br-3xl rounded-tr-3xl h-10 leading-10">داب کارت</div>
      </ul>
      <div className="w-[153px] h-10 gap-x-1 flex justify-center items-center ">
        <div className="w-16 h-10 text-[#4EF09D] cursor-pointer text-base leading-10">ورود</div>
        <div className="w-20 h-10 bg-[#4EF09D] text-center rounded-3xl leading-10 cursor-pointer  text-base">ثبت نام</div>

      </div>
    </div>
    
  );
};

export default Nav;
