import React from "react";
import {hero, hero1, aboutDog} from "../assets";
import {About} from "../components";

const Hero = () => {
  return (
    <section className='flex flex-col justify-around bg-cover min-h-screen h-[1800px] relative bg-hero-bg'>
      {/* C1 */}

      <div
        id='C1'
        className='flex flex-col lg:flex-row lg:justify-center items-center  space-y-4 lg:space-y-0 lg:space-x-36 '>
        <img
          id='C1I'
          src={hero1}
          alt='Dog'
          className='w-1/2 lg:w-1/3'
        />
        <div
          id='C1C1'
          className='flex flex-col space-y-4'>
          <div className="self-stretch mt-[-13.00px] ml-[-12.00px] [-webkit-text-stroke:6px_#1f1f67] text-[140px] text-center leading-[156.8px]  [text-shadow:5px_8px_4px_#2d2d7280] [font-family:'Peralta',Helvetica] font-normal text-[#ffbc6c] tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
            AirDoge
          </div>
          <div className="flex-initial  ml-[-2.00px] [text-shadow:1px_3px_4px_#ffbc6d] [-webkit-text-stroke:1px_#ffbc6d] [font-family:'Peralta',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[33.3px]">
            Unleashing Goodness with AirDoge!
          </div>
          <p className=" w-[609px] font-medium [-webkit-line-clamp:4] [font-family:'Atma',Helvetica] text-black text-[28px] text-justify tracking-[0.56px] leading-[39.2px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
            The Memecoin with a Mission! Together, we’re rescuing animals, planting trees,
            and uplifting communities. Join the AirDoge pack on AirDAO and make a
            difference while you earn!
          </p>
          <div className='flex space-x-4 p-2'>
            {/* Three Boxes in a row */}
            <div className='w-[209px] h-[118px] bg-white  shadow-md flex flex-col items-center justify-center rounded-3xl border-t-4 border-b-[10px]  border-x-4 border-solid border-[#ff8c00] '>
              <div className=" self-stretch mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[32px] text-center tracking-[0.64px] leading-[44.8px]">
                Price
              </div>
              <div className='inline-flex flex-col items-center gap-2 relative flex-[0_0_auto] '>
                <div className="relative w-fit mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-sm text-center tracking-[0.72px] leading-[50.4px] whitespace-nowrap">
                  $0.0000000000188
                </div>
              </div>
            </div>
            <div className='w-[209px] h-[118px] bg-white  shadow-md flex flex-col items-center justify-center rounded-3xl border-t-4 border-b-[10px]  border-x-4 border-solid border-[#ff8c00] '>
              <div className=" self-stretch mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[32px] text-center tracking-[0.64px] leading-[44.8px]">
                Market Cap
              </div>
              <div className="relative w-fit mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-2xl text-center tracking-[0.72px] leading-[50.4px] whitespace-nowrap">
                $100M
              </div>
            </div>
            <div className='w-[209px] h-[118px] bg-white p-1  shadow-md flex flex-col items-center justify-center rounded-3xl border-t-4 border-b-[10px]  border-x-4 border-solid border-[#ff8c00] '>
              <div className=" self-stretch mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Cabin_Sketch',Helvetica] font-bold text-black text-[28px] text-center tracking-[0.64px] leading-[44.8px] flex">
                Tokens Burned
              </div>
              <div className="relative w-fit mt-[-1.00px] [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-2xl text-center tracking-[0.72px] leading-[50.4px] whitespace-nowrap">
                45M
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* C2 */}
      <About />
    </section>
  );
};

export default Hero;
