import React from "react";
import easypay from "../assets/Frame316.png"

const Easypay = () => {
  return (
    <div className="w-customW1440 h-[462px]  absolute top-[2264px] right-[170px] font-iransans">
      <div className="flex w-[1204px] h-[462px] justify-between">
        <div className="w-[615px] h-[221px]  gap-5">
          <h3 className="text-[#FDE047] font-bold text-[40px]">
            آسان شروع کن!
          </h3>
          <p className="text-gray-400">
            هر آنچه برای تجربه یک تراکنش سریع و آسان نیاز دارید، در خریدآسان
            دابنکس برای شما فراهم است. برای خرید ارز دیجیتال دلخواهتان کافی است،
            از میان متنوع ترین رمزارزها، آن را انتخاب کنید و سپس از ثبت سفارش،
            به صورت آنی در کیف پولتان دریافت کنید.
          </p>
          <div className="flex w-60 h-14 mt-3">

          <div className="text-[#5EEAE1] flex justify-center items-center w-[136px] h-14 rounded-tr-[40px] rounded-br-[40px] bg-gradient-to-r from-[#000000] via-[#14B8AD52] to-[#000000] ">
    خرید آسان
</div>
<div className="text-[#5EEAE1] flex justify-center items-center w-[105px] h-14 rounded-tl-[40px] rounded-bl-[40px] bg-gradient-to-r from-[#000000] via-[#14B8AD52] via-20% to-[#000000] to-80% opacity-30">
    معامله
</div>

          </div>
        </div>
        <div>
            <img src={easypay} alt="easypay" />
        </div>
      </div>
    </div>
  );
};

export default Easypay;
