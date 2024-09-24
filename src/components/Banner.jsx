import React from 'react';
import frame336 from "../assets/Frame336.png"

const Banner = () => {
    return (
        <div className='w-customW1440 h-[950px] bg-customBlack font-iransans '>
<div className=' w-[585px] h-[232px] absolute top-[463px] left-[747px] gap-y-3 bg-cu'>
    <h2 className='w-[350px] h-[122px] text-[#FDE047] font-bold text-5xl leading-[61.44px]'>لذت معامله رو با
    دابنکس تجربه کن</h2>
    <p className='w-[575px] h-6 text-[#D5D5D5] mt-3 mb-1'>بازار حرفه ای فروش و خرید ارز دیجیتال با بالاترین سطح امنیت و کاربری آسان </p>
    <div className='w-[575px] h-[61px] flex'>
    <div className="w-[398px] h-[61] p-[2px] bg-gradient-to-l from-[#134E4A] to-[rgba(19, 78, 74, 0)] rounded-3xl mt-2">
  <input 
    className="w-full h-full bg-customBlack text-white  px-4 py-2 focus:outline-none placeholder-[#134E4A] rounded-3xl" 
    type="text" 
    placeholder="شماره تماس خود را وارد کنید" 
  />
</div>
<div className='w-40 h-[61px]  '>
<div
  className="w-40 h-[61px] cursor-pointer text-[#5EEAE1] bg-gradient-to-l from-[#134E4A] to-[rgba(19, 78, 74, 0)] rounded-br-3xl rounded-tr-3xl flex justify-center items-center text-2xl"

>
  شروع کنیم
</div>
</div>
  </div>

</div>
<div className='w-[488px] h-[572px] absolute top-[293px] left-[118px]'>
  <img src={frame336} alt="logo" />
</div>



        </div>
    );
};

export default Banner;