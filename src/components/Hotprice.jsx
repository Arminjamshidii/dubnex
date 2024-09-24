import React from 'react';
import eth from '../assets/ethb.png'
import btc from '../assets/btc.png'
import shiba from '../assets/shiba.png'
const Hotprice = () => {
    return (
        <div className='w-customW1440 font-iransans h-[88px] flex justify-center items-center bg-customBlack absolute top-[1015px]  '>

<ul className="w-[1204px] h-[88px] p-4 font-iransans text-2xl  rounded-3xl border border-[#5EEAE1] bg-gradient-to-r from-[#000000] from-15% via-[#134E4A] via-40% to-[#000000] to-85% flex items-center justify-center gap-x-8">
    <li className='flex justify-center items-center gap-x-3'><img className='w-8 h-8' src={eth} alt="eth" /><p className='text-gray-200'>اتریوم   161.025.199   <span className='text-green-400'>(5.27+)</span></p></li>
    <li className='flex justify-center items-center gap-x-3'><img src={shiba} alt="shiba" /><p className='text-gray-200'>شیبا   0.827   <span className='text-green-400'>(1.72+)</span></p></li>
    <li className='flex justify-center items-center gap-x-3'><img className='w-8 h-8' src={btc} alt="btc" /><p className='text-gray-200'>بیت کوین   161.025.199   <span className='text-green-400'>(5.27+)</span></p></li>
</ul>
   
        </div>
    );
};

export default Hotprice;