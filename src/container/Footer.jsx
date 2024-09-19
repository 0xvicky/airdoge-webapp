import React from "react";
import {footerlogo} from "../assets";

const Footer = () => {
  return (
    <div className='flex flex-col w-[1512px] items-start gap-2.5 pt-10 pb-5 px-[97px]   bg-[#0000000a] border-t [border-top-style:solid] border-[#00000080]'>
      <div className='flex items-center gap-[180px] relative self-stretch w-full flex-[0_0_auto]'>
        <div className='flex w-[643.33px] items-center gap-16 relative'>
          <img
            src={footerlogo}
            alt=''
          />
          <p className="relative w-fit [font-family:'Atma',Helvetica] font-medium text-black text-[22px] text-justify tracking-[0.44px] leading-[30.8px] [-webkit-line-clamp:11] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
            Disclaimer
            <br />
            $ADOGE is a meme token made for fun
          </p>
        </div>
        <div className='flex w-[494.33px] items-center justify-end gap-12 relative'>
          <img
            className='relative flex-[0_0_auto]'
            alt='Frame'
            src='https://c.animaapp.com/MIx9ki2W/img/frame-21.svg'
          />
          <div className='flex flex-col w-[194px] h-[70px] items-center justify-center gap-2.5 px-[13px] py-[18px] relative mt-[-3.00px] mb-[-3.00px] mr-[-3.00px] bg-white rounded-[200px] border-[3px] border-solid border-black shadow-[5px_8px_4px_#000000] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]'>
            <div className='inline-flex h-[34.7px] items-center gap-[61px] relative mt-[-3.35px]'>
              <div className="relative w-fit [font-family:'Bubblegum_Sans',Helvetica] font-normal text-black text-[28px] text-center tracking-[0] leading-[31.4px] whitespace-nowrap [-webkit-line-clamp:1] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                Buy $ADOGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
