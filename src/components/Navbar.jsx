import React, {useState} from "react";
// import BuyDoge from "./Buydoge";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex items-start gap-[140px] px-12 py-5 fixed top-[49px] left-[34px] rounded-[50px] z-50 w-full flex-shrink'>
      {/* Logo and Heading */}
      <div className='flex items-center gap-5 relative flex-[0_0_auto]'>
        <img
          className='relative w-[84px] h-[84px] mt-[-8.00px] mb-[-16.00px] ml-[-10.00px] object-cover'
          alt='Logo'
          src='https://c.animaapp.com/MIx9ki2W/img/logo-1-1@2x.png'
        />
        <div className="heading_24 overflow-hidden rounded-bl-sm rounded-br-sm [-webkit-text-stroke:2px_#1f1f67] text-[#f7aa49] text-center font-['Peralta'] text-[1.75rem] leading-[112%]">
          AirDoge
        </div>
      </div>

      {/* Desktop Menu links */}
      <div className='hidden lg:flex flex-col w-[677px] h-[70px] items-center justify-center gap-2.5 px-12 py-[18px] bg-[#d4d4d433] rounded-[200px] border-[3px] border-solid border-black shadow-[5px_8px_4px_#000000] backdrop-blur-2xl'>
        <div className='inline-flex h-[34.7px] items-center justify-center gap-12 relative'>
          <a
            className="relative w-fit [font-family:'Bubblegum_Sans',Helvetica] font-normal text-black text-[28px] text-center tracking-[0] leading-[31.4px]"
            href='#'>
            Home
          </a>
          <a
            className="relative w-fit [font-family:'Bubblegum_Sans',Helvetica] font-normal text-black text-[28px] text-center tracking-[0] leading-[31.4px]"
            href='#tokenomics'>
            Tokenomics
          </a>
          <a
            className="relative flex w-fit [font-family:'Bubblegum_Sans',Helvetica] font-normal  text-black lg:text-[28px]  tracking-[0] leading-[28px]"
            href='#how_to_buy'>
            How to <br />
            buy?
          </a>
          <a
            className="relative w-fit [font-family:'Bubblegum_Sans',Helvetica] font-normal text-black text-[28px] text-center tracking-[0] leading-[31.4px]"
            href='#roadmap'>
            Roadmap
          </a>
        </div>
      </div>

      {/* Hamburger Menu button for mobile/tablet */}
      <div className='lg:hidden flex items-center'>
        <button
          className='text-black focus:outline-none'
          onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for mobile/tablet */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white lg:hidden flex flex-col items-center py-4 z-40'>
          <a
            className='py-2 px-4 text-black text-[20px] font-semibold'
            href='#'>
            Home
          </a>
          <a
            className='py-2 px-4 text-black text-[20px] font-semibold'
            href='#tokenomics'>
            Tokenomics
          </a>
          <a
            className='py-2 px-4 text-black text-[20px] font-semibold'
            href='#how_to_buy'>
            How to buy?
          </a>
          <a
            className='py-2 px-4 text-black text-[20px] font-semibold'
            href='#roadmap'>
            Roadmap
          </a>
        </div>
      )}

      {/* BuyDoge Button */}
      <div
        className={`border-black flex items-center shadow-[5px_8px_4px_#000000] px-[13px] py-[18px] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] relative w-[194px] flex-col rounded-[200px] backdrop-blur-[25px] backdrop-brightness-[100%] gap-2.5 border-[3px] border-solid h-[70px] justify-center bg-[#ff8c00] hover:bg-[#fceeac]`}>
        <div className="[font-family:'Bubblegum_Sans',Helvetica] w-fit tracking-[0] text-[28px] text-black font-normal text-center leading-[31.4px]">
          Buy $ADOGE
        </div>
      </div>
    </div>
  );
};

export default Navbar;
