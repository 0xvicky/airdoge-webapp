import React from "react";
import {aboutDog} from "../assets";

const About = () => {
  return (
    <div
      id='C2'
      className='mt-8 lg:mt-0 flex flex-col lg:flex-row lg:justify-center items-center space-y-4 lg:space-y-0'>
      <div
        id='C2C1'
        className='space-y-4 flex flex-col'>
        <div className="lg:self-start [text-shadow:5px_8px_4px_#2d2d7280] [-webkit-text-stroke:4px_#1f1f67] [font-family:'Peralta',Helvetica] font-normal text-[#ffbc6c] text-[80px] text-center tracking-[0] leading-[89.6px] whitespace-nowrap [-webkit-line-clamp:1] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
          ABOUT
        </div>

        <p className=" w-[786px]   font-semibold [-webkit-line-clamp:11] [font-family:'Atma',Helvetica] text-black text-[28px] text-justify tracking-[0.56px] leading-[39.2px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
          At AirDoge, we believe that a meme can be more than just fun—it can fuel change.
          Powered by the AirDAO network, AirDoge is a community-driven memecoin with a
          purpose. Our mission goes beyond the blockchain: we’re committed to protecting
          animals, nurturing the environment, and empowering the underprivileged.
          <br />
          <br />
          Every token you hold contributes to social good, from rescuing animals to
          planting trees and supporting children and women in need. AirDoge isn’t just a
          memecoin; it’s a movement for a better world, where crypto meets compassion.
        </p>
        <p className=" w-[901px]  [text-shadow:1px_3px_4px_#ffbc6d] [font-family:'Atma',Helvetica] font-semibold text-black text-[32px] tracking-[0.64px] leading-[44.8px] mt-10">
          Join us today, and together, let&#39;s bark for a better tomorrow!
        </p>
      </div>
      <img
        id='C2I'
        src={aboutDog}
        alt='C2 Image'
        className='w-[398px] h-[398px] mt-9'
      />
    </div>
  );
};

export default About;
