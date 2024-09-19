import React from "react";

const BuyDoge = () => {
  return (
    <div
      className={`border-black flex items-center shadow-[5px_8px_4px_#000000] px-[13px] py-[18px] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] relative w-[194px] flex-col rounded-[200px] backdrop-blur-[25px] backdrop-brightness-[100%] gap-2.5 border-[3px] border-solid h-[70px] justify-center bg-[#ff8c00] hover:bg-[#fceeac] !mt-[-3.00px] !mb-[-3.00px] !mr-[-3.00px]`}>
      <div className='inline-flex mt-[-3.35px] items-center gap-[61px] h-[34.7px] relative'>
        <div className="[font-family:'Bubblegum_Sans',Helvetica] w-fit [display:-webkit-box] tracking-[0] [-webkit-line-clamp:1] text-[28px] text-black font-normal overflow-hidden text-center whitespace-nowrap [-webkit-box-orient:vertical] text-ellipsis leading-[31.4px] relative">
          Buy $ADOGE
        </div>
      </div>
    </div>
  );
};

export default BuyDoge;
