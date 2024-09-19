import React, {useState} from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex items-center justify-between px-4 py-4 md:px-12 md:py-5 fixed top-[49px] left-[34px] w-full z-50 bg-white shadow-lg rounded-full'>
      {/* Logo and Heading */}
      <div className='flex items-center'>
        <img
          className='w-[50px] h-[50px] md:w-[84px] md:h-[84px] object-cover'
          alt='Logo'
          src='https://c.animaapp.com/MIx9ki2W/img/logo-1-1@2x.png'
        />
        <div className="heading_24 text-[#f7aa49] text-center font-['Peralta'] text-xl md:text-[1.75rem] leading-[112%] ml-3">
          AirDoge
        </div>
      </div>

      {/* Menu links - shown on larger screens */}
      <div className='hidden lg:flex items-center'>
        <div className='inline-flex gap-8 md:gap-12'>
          <a
            className="text-black text-lg md:text-[28px] font-['Bubblegum_Sans']"
            href='#'>
            Home
          </a>
          <a
            className="text-black text-lg md:text-[28px] font-['Bubblegum_Sans']"
            href='#tokenomics'>
            Tokenomics
          </a>
          <a
            className="text-black text-lg md:text-[28px] font-['Bubblegum_Sans']"
            href='#how_to_buy'>
            How to buy?
          </a>
          <a
            className="text-black text-lg md:text-[28px] font-['Bubblegum_Sans']"
            href='#roadmap'>
            Roadmap
          </a>
        </div>
      </div>

      {/* Hamburger Menu for tablet/mobile */}
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

      {/* Dropdown Menu for mobile/tablet - shown when the hamburger is clicked */}
      {isMenuOpen && (
        <div className='absolute top-[100px] left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center py-4 z-40'>
          <a
            className='py-2 px-4 text-black text-lg font-semibold'
            href='#'>
            Home
          </a>
          <a
            className='py-2 px-4 text-black text-lg font-semibold'
            href='#tokenomics'>
            Tokenomics
          </a>
          <a
            className='py-2 px-4 text-black text-lg font-semibold'
            href='#how_to_buy'>
            How to buy?
          </a>
          <a
            className='py-2 px-4 text-black text-lg font-semibold'
            href='#roadmap'>
            Roadmap
          </a>
        </div>
      )}

      {/* BuyDoge component */}
      <div
        className={`hidden lg:flex items-center px-6 py-3 bg-[#ff8c00] hover:bg-[#fceeac] rounded-full border-2 border-black shadow-lg`}>
        <div className="[font-family:'Bubblegum_Sans'] text-lg md:text-[28px] text-black">
          Buy $ADOGE
        </div>
      </div>

      {/* BuyDoge button for mobile */}
      <div className='lg:hidden bg-[#ff8c00] hover:bg-[#fceeac] flex items-center px-6 py-3 rounded-full shadow-lg border-2 border-black'>
        <div className="[font-family:'Bubblegum_Sans'] text-lg text-black">
          Buy $ADOGE
        </div>
      </div>
    </div>
  );
};

export default Navbar;
