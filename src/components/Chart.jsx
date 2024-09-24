import React from "react";
import eth from "../assets/ethb.png";
import btc from "../assets/btc.png";
import shiba from "../assets/shiba.png";
import increase from "../assets/vector.png";
import decrease from "../assets/vector1.png";



const Chart = () => {
  return (
    <div className="w-customW1440  bg-customBlack absolute flex items-center justify-center top-[1215px] font-iransans ">
      <div className="w-[1204px] h-[861px] rounded-[40px] relative  bg-[#1A1C1C] flex flex-col items-center">
        <div className=" w-[1156px] h-24 border-b-2 border-dashed border-[#20FFD73D] flex items-center p ">
          <ul className="w-1/2 flex text-2xl text-[#CECECE] items-center gap-x-5">
            <li className="cursor-pointer hover:text-[#2ff0ccca]">
              رمزارزهای برتر
            </li>
            <li className="cursor-pointer hover:text-[#2ff0ccca]">پرسودها</li>
            <li className="cursor-pointer hover:text-[#2ff0ccca]"> پرضررها</li>
          </ul>
          <div className="flex w-1/2 h-24 justify-end items-center text-xl text-center ">
            <div className="leading-8 w-[97px] h-12 bg-gradient-to-l from-[#2DD4C9] to-[#2DD4C9]/0 rounded-tr-[32px] rounded-br-[32px]  ">
              تومان
            </div>
            <div className="leading-8 w-[97px] h-12 text-[#2DD4C9] rounded-tl-[32px] rounded-bl-[32px] text-center border-b-2 border-[#2DD4C9]">
              تتر
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[1156px] justify-center">
          <div className="flex h-14">
            <p className="absolute top-[119px] left-[1089px] text-white text-2xl font-bold">
              نام رمزارز
            </p>
            <p className="absolute top-[119px] left-[818px] text-white text-2xl font-bold">
              آخرین قیمت
            </p>
            <p className="absolute top-[119px] left-[590px] text-white text-2xl font-bold">
              تغییرات
            </p>
            <p className="absolute top-[119px] left-[276px] text-white text-2xl font-bold">
              نمودار 24 ساعت
            </p>
          </div>

          <ul>
            <li className="flex items-center top-[180px] absolute left-8 h-14  w-[1156px]  ">
            
              <div className="flex justify-center left-[987px] gap-x-6 absolute ">
                <img className="w-14 h-14" src={btc} alt="btc" />
                <div className="text-white text-xl">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white absolute left-[760px]  text-2xl ">3.571.357.261</p>
                <p className="text-green-600 absolute left-[576px]  text-2xl">+ 0.98</p>
                <img className="absolute left-[252px]" src={increase} alt="increase" />
                <div className="w-[147px] h-12 text-center absolute leading-10 top-4 left-5 rounded-3xl gap-3 bg-gradient-to-l from-[#5EEAE1] to-[#5EEAE1]/0 cursor-pointer">خرید / فروش</div>
            
            </li>
            <li className="flex items-center top-[274px] absolute left-8 h-14  w-[1156px]  ">
            
              <div className="flex justify-center left-[987px] gap-x-6 absolute ">
                <img className="w-14 h-14" src={eth} alt="eth" />
                <div className="text-white text-xl">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white absolute left-[760px]  text-2xl ">3.571.357.261</p>
                <p className="text-red-400 absolute left-[576px]  text-2xl">+ 0.98</p>
                <img className="absolute left-[252px]" src={decrease} alt="increase" />
                <div className="w-[147px] h-12 text-center absolute leading-10 top-4 left-5 rounded-3xl gap-3 bg-gradient-to-l from-[#5EEAE1] to-[#5EEAE1]/0 cursor-pointer">خرید / فروش</div>
            
            </li>
            <li className="flex items-center top-[368px] absolute left-8 h-14  w-[1156px]  ">
            
              <div className="flex justify-center left-[987px] gap-x-6 absolute ">
                <img className="w-14 h-14" src={btc} alt="btc" />
                <div className="text-white text-xl">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white absolute left-[760px]  text-2xl ">3.571.357.261</p>
                <p className="text-green-400 absolute left-[576px]  text-2xl">+ 0.98</p>
                <img className="absolute left-[252px]" src={increase} alt="increase" />
                <div className="w-[147px] h-12 text-center absolute leading-10 top-4 left-5 rounded-3xl gap-3 bg-gradient-to-l from-[#5EEAE1] to-[#5EEAE1]/0 cursor-pointer">خرید / فروش</div>
            
            </li>
            <li className="flex items-center top-[462px] absolute left-8 h-14  w-[1156px]  ">
            
              <div className="flex justify-center left-[987px] gap-x-6 absolute ">
                <img className="w-14 h-14" src={eth} alt="eth" />
                <div className="text-white text-xl">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white absolute left-[760px]  text-2xl ">3.571.357.261</p>
                <p className="text-red-400 absolute left-[576px]  text-2xl">+ 0.98</p>
                <img className="absolute left-[252px]" src={decrease} alt="increase" />
                <div className="w-[147px] h-12 text-center absolute leading-10 top-4 left-5 rounded-3xl gap-3 bg-gradient-to-l from-[#5EEAE1] to-[#5EEAE1]/0 cursor-pointer">خرید / فروش</div>
            
            </li>
            <li className="flex items-center top-[556px] absolute left-8 h-14  w-[1156px]  ">
            
              <div className="flex justify-center left-[987px] gap-x-6 absolute ">
                <img className="w-14 h-14" src={btc} alt="btc" />
                <div className="text-white text-xl">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white absolute left-[760px]  text-2xl ">3.571.357.261</p>
                <p className="text-green-400 absolute left-[576px]  text-2xl">+ 0.98</p>
                <img className="absolute left-[252px]" src={increase} alt="increase" />
                <div className="w-[147px] h-12 text-center absolute leading-10 top-4 left-5 rounded-3xl gap-3 bg-gradient-to-l from-[#5EEAE1] to-[#5EEAE1]/0 cursor-pointer">خرید / فروش</div>
            
            </li>
            <li className="flex items-center top-[650px] absolute left-8 h-14  w-[1156px]  ">
            
              <div className="flex justify-center left-[987px] gap-x-6 absolute ">
                <img className="w-14 h-14" src={eth} alt="eth" />
                <div className="text-white text-xl">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white absolute left-[760px]  text-2xl ">3.571.357.261</p>
                <p className="text-red-400 absolute left-[576px]  text-2xl">+ 0.98</p>
                <img className="absolute left-[252px]" src={decrease} alt="increase" />
                <div className="w-[147px] h-12 text-center absolute leading-10 top-4 left-5 rounded-3xl gap-3 bg-gradient-to-l from-[#5EEAE1] to-[#5EEAE1]/0 cursor-pointer">خرید / فروش</div>
            
            </li>
            <div className=" flex justify-center items-center w-[1156px] h-[61px] text-[#5EEAE1] absolute top-[766px] bg-red-600 rounded-3xl cursor-pointer bg-gradient-to-r from-[#000000] from-20% via-[#134E4A] via-50% to-[#000000] to-70% border-b-2 border-[#5EEAE1] ">
            مشاهده همه رمزارز ها
            </div>
            
          </ul>

          {/* <div className="flex flex-col gap-y-16 mt-3">
            <div className="grid grid-cols-5 place-items-center pl h-14">
              <div className="flex justify-center gap-x-2">
                <img className="w-14 h-14" src={btc} alt="btc" />
                <div className="text-white">
                  <p>بیت کوین </p>
                  <p>BTC / IRT</p>
                </div>
              </div>
                <p className="text-white">3.571.357.261</p>
                <p className="text-green-400">+ 0.98</p>
                <img src={increase} alt="increase" />
            </div>
            <div className="bg-blue-500 h-14">a</div>
            <div className="bg-blue-500 h-14">a</div>
            <div className="bg-blue-500 h-14">a</div>
            <div className="bg-blue-500 h-14">a</div>
            <div className="bg-blue-500 h-14">a</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Chart;
