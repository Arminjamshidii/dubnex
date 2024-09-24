import React from "react";
import call from "../assets/call.png";
import sms from "../assets/sms.png";
import google from "../assets/google.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
const Footerpage = () => {
  return (
    <div className="w-customW1440 font-iransans">
      <div className="w-[1440px] flex h-[485px] absolute top-[4508px] gap-[70px] bg-[#131414]">
        <div className="w-[241px] h-[289px] flex flex-col gap-y-8">
          <h2 className="text-[#FDE047] text-[32px] font-bold">دابنکس</h2>
          <div className="flex gap-x-2">
            <img src={call} alt="call" />
            <p className="text-white">121-12345678</p>
          </div>
          <div className="flex gap-x-2">
            <img src={sms} alt="call" />
            <p className="text-white"> support@Dubnex.ir</p>
          </div>
          <p className="text-white">
            تلفن صرفا برای امور اداری ازشنبه تا چهارشنبه از ساعت 9تا17 در دسترس
            است،لطفا برای پشتیبانی از طریق چت باما در تماس باشید.
          </p>
          <div className="flex gap-x-3">
            <img src={google} alt="google" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="w-[124px] h-[320px] flex flex-col gap-y-8">
          <h2 className="text-[#FDE047] text-[32px] font-bold">محصولات</h2>
          <div className="flex flex-col gap-y-3 h-[247px] ">
            <p className="text-white">اسپات </p>
            <p className="text-white">خرید آسان</p>
            <p className="text-white">بیت لون</p>
            <p className="text-white">استیکینگ</p>
            <p className="text-white">بات</p>
            <p className="text-white">داب ایکس </p>
            <p className="text-white">کارت هدیه</p>
          </div>
        </div>
        <div className="w-[177px] h-[357px] flex flex-col gap-y-8 text-nowrap">
          <h2 className="text-[#FDE047] text-[32px] font-bold w-[177px]">
            درباره دابنکس
          </h2>
          <div className="flex flex-col gap-3 w-[177px] h-[248px] text-white">
            <p>درباره دابنکس</p>
            <p>استخدام</p>
            <p>سطوح کاربری</p>
            <p>شرایط و مقررات استفاده</p>
            <p>پاک کردن کوکی</p>
            <p>سطوح کارمزدی</p>
            <p>معرفی دوستان </p>
            <p>امنیت دابنکس</p>

          </div>
        </div>
        <div className="w-[127px] h-[246px] flex flex-col gap-y-8">
          <h2 className="text-[#FDE047] text-[32px] font-bold">خدمات</h2>
          <div className="flex flex-col gap-y-3 w-[177px] h-[248px] text-white">
            <p>چت پشتیبانی</p>
            <p>راهنمای استفاده </p>
            <p>کارنامه سود و زیان</p>
            <p>آکادمی</p>
            <p>دابنکس لند </p>

          </div>
        </div>
        <div className="w-[259px] h-[320px] flex flex-col gap-y-8">
          <h2 className="text-[#FDE047] text-[32px] font-bold">قیمت ارزهای دیجیتال </h2>
          <div className="flex flex-col gap-y-3 w-[177px] h-[248px] text-white">
           <p>کاوشگر قیمت ارز دیجیتال</p>
           <p>قیمت بیت کوین</p>
           <p>قیمت اتریوم</p>
           <p>قیمت تون کوین</p>
           <p>قیمت پپه</p>
           <p>قیمت دوج کوین </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerpage;
