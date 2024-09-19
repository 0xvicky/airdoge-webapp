import React from "react";
import {rdmap2} from "../assets";

const Roadmap = () => {
  return (
    <section
      id='roadmap'
      className='py-16 bg-white mt-10 bg-roadmap-bg bg-cover  min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8 space-y-4  flex flex-col items-center justify-center'>
        <div className=" p-2 mt-8 [text-shadow:5px_8px_4px_#2d2d7280] [-webkit-text-stroke:5px_#1f1f67] [font-family:'Peralta',Helvetica] font-normal text-[#ffbc6c] text-[80px] text-center tracking-[0] leading-[89.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
          ROADMAP
        </div>
        <img
          src={rdmap2}
          alt='Roadmap'
          className=''
        />
      </div>
    </section>
  );
};

export default Roadmap;
