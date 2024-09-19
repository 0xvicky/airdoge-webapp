import React from "react";
import {token1} from "../assets";

const Tokenomics = () => {
  return (
    <section
      id='tokenomics'
      className=' py-16 border-t-4 border-black'>
      <div
        id='TP1'
        className='max-w-[1360px] h-[521px] mx-auto  flex flex-col lg:flex-row items-center justify-between p-5 rounded-xl  lg:space-x-16 bg-tokenomics-bg bg-contain bg-no-repeat '>
        {/* Left Side */}
        <div
          id='TP1C1'
          className='space-y-4'>
          <div className="w-fit mt-[-9.00px] ml-[-8.00px] [-webkit-text-stroke:5px_#1f1f67] text-[80px] leading-[89.6px] whitespace-nowrap relative [text-shadow:5px_8px_4px_#2d2d7280] [font-family:'Peralta',Helvetica] font-normal text-[#ffbc6c] tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
            TOKENOMICS
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='relative w-[220px] h-[170px] bg-black rounded-[28px]'>
              <div className='relative w-[209px] h-[152px] top-1.5 left-1.5 bg-white rounded-[20px]'>
                <div className='flex flex-col w-[111px] items-center gap-2 relative top-7 left-[49px]'>
                  <div className="relative self-stretch mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[32px] tracking-[0.64px] leading-[44.8px]">
                    SUPPLY
                  </div>
                  <div className="relative w-fit [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-4xl text-center tracking-[0.72px] leading-[50.4px] whitespace-nowrap">
                    1B
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-[220px] h-[170px] bg-black rounded-[28px]'>
              <div className='relative w-[209px] h-[152px] top-1.5 left-1.5 bg-white rounded-[20px]'>
                <div className='flex flex-col w-[111px] items-center gap-2 relative top-7 left-[49px]'>
                  <div className="relative self-stretch mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[32px] tracking-[0.64px] leading-[44.8px]">
                    Taxes
                  </div>
                  <div className="relative w-fit [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-4xl text-center tracking-[0.72px] leading-[50.4px] whitespace-nowrap">
                    5/5
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-[220px] h-[170px] bg-black rounded-[28px]'>
              <div className='relative w-[209px] h-[152px] top-1.5 left-1.5 bg-white rounded-[20px]'>
                <div className='flex flex-col w-[111px] items-center gap-2 relative top-7 left-[49px]'>
                  <div className="relative self-stretch mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[32px] tracking-[0.64px] leading-[44.8px]">
                    LIQUIDITY
                  </div>
                  <div className="relative w-fit [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-4xl text-center tracking-[0.72px] leading-[50.4px] whitespace-nowrap">
                    Burned
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-[716px] h-[81px] bg-black rounded-[28px]'>
            <div className='relative w-[704px] h-[62px] top-1.5 left-1.5 bg-white rounded-[20px]'>
              <div className='inline-flex items-center justify-center relative top-[13px] left-[31px]'>
                <div className="relative w-fit mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[32px] tracking-[0.64px] leading-[44.8px] whitespace-nowrap">
                  CA-
                </div>
                <div className="relative w-fit mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0.64px] leading-[44.8px] whitespace-nowrap">
                  0X17111XXXXXXXXXXXXXXXXXXXXXX
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <img
          src={token1}
          alt='Tokenomics'
          className=''
        />
      </div>
    </section>
  );
};

export default Tokenomics;
