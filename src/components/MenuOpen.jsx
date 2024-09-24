import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import navline from '../assets/Frame326.png'

const MenuOpen = () => {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenItemIndex(openItemIndex === index ? null : index);
    };

    return (
        <div className='w-customW1440 h-[579px] absolute top-[3629px] flex justify-center items-center'>
            <ul className='flex flex-col w-[1204px] h-[579px] bg-customBlack gap-y-2'>
                {['از کجا خرید رو شروع کنم؟!', 'پیشنهادات ویژه', 'جدیدترین محصولات', 'پرفروش‌ترین‌ها'].map((item, index) => (
                    <li
                        key={index}
                        onClick={() => toggleItem(index)}
                        className={`w-full min-h-[79px] rounded-[56px] items-center leading-[79px] text-2xl bg-gradient-to-l from-[#134E4A] from-30% via-[#0E191C00] via-70% to-customBlack to-95% text-[#5EEAE1] cursor-pointer transition-all duration-300 ease-in-out ${openItemIndex === index ? 'h-[235px]' : 'h-[79px]'}`}
                    >
                        <div className='flex justify-between items-center pr-6'>
                            <p>{item}</p>
                            <MdOutlineKeyboardArrowLeft className={`transform transition-transform duration-300 ${openItemIndex === index ? 'rotate-90' : ''}`} />
                        </div>
                    </li>
                ))}
                <li className='mt-4 w-[1204px] h-[120px]'><img className='w-[1204px] h-[84px] ' src={navline} alt="navline" /></li>
            </ul>
        </div>
    );
};

export default MenuOpen;
