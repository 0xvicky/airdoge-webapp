import React from "react";
import {htbn1, htbn2, htbn3, htbn4} from "../assets";

const Howtobuy = () => {
  return (
    <section
      id='how-to-buy'
      className=' py-16 lg:h-[1100px] '>
      <div className='max-w-8xl  lg:px-5 space-y-8 flex flex-col items-center justify-center '>
        <div className=" p-1  w-fit mt-[-9.00px] [text-shadow:5px_8px_4px_#2d2d7280] [-webkit-text-stroke:5px_#1f1f67] [font-family:'Peralta',Helvetica] font-normal text-[#ffbc6c] text-[80px] text-center tracking-[0] leading-[89.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
          HOW TO BUY?
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto '>
          {/* HTB Cards */}

          <div className='flex  items-center justify-center w-[673px] h-[349px] bg-[#f9a94a0d] rounded-[30px] overflow-hidden border-4 border-b-[14px]  border-solid border-black bg-cover bg-[50%_50%] p-3'>
            <img
              src={htbn1}
              alt=''
            />
            <p className="  [font-family:'Atma',Helvetica] font-semibold text-[#2d2d72] text-[28px] text-justify tracking-[0.56px] leading-[39.2px] [-webkit-line-clamp:11]  text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
              Download the MetaMask wallet and install in it you browser.
            </p>
          </div>
          <div className='flex  items-center justify-center w-[673px] h-[349px] bg-[#f9a94a0d] rounded-[30px] overflow-hidden border-4 border-b-[14px]  border-solid border-black bg-cover bg-[50%_50%] p-3'>
            <img
              src={htbn2}
              alt=''
            />
            <p className=" [font-family:'Atma',Helvetica] font-semibold text-[#2d2d72] text-[28px] text-justify tracking-[0.56px] leading-[39.2px] [-webkit-line-clamp:11]  text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
              Change the network from Ethereum to Ambrosus. RPC
              <br /> used{" "}
              <a
                className='underline'
                href='https://ambrosus.io'
                target='_blank'>
                https://network.ambrosus.io
              </a>
            </p>
          </div>
          <div className='flex  items-center justify-center w-[673px] h-[349px] bg-[#f9a94a0d] rounded-[30px] overflow-hidden border-4 border-b-[14px]  border-solid border-black bg-cover bg-[50%_50%] p-3'>
            <img
              src={htbn3}
              alt=''
            />
            <p className=" w-[367px] [font-family:'Atma',Helvetica] font-semibold text-[#2d2d72] text-[28px] text-justify tracking-[0.56px] leading-[39.2px] [-webkit-line-clamp:11]  text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
              Load your wallet with AMB tokens. You can send them to your wallet from CEXs
              or bridge from other chains
            </p>
          </div>
          <div className='flex  items-center justify-center w-[673px] h-[349px] bg-[#f9a94a0d] rounded-[30px] overflow-hidden border-4 border-b-[14px]  border-solid border-black bg-cover bg-[50%_50%] p-3'>
            <img
              src={htbn4}
              alt=''
            />
            <p className=" w-[367px] [font-family:'Atma',Helvetica] font-semibold text-[#2d2d72] text-[28px] text-justify tracking-[0.56px] leading-[39.2px] [-webkit-line-clamp:11]  text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
              Go to ASTRA dex connect wallet and give the AM token CA which is mentioned
              above and press swap.
            </p>
          </div>

          {/* Repeat for other steps */}
        </div>
      </div>
    </section>
  );
};

export default Howtobuy;
