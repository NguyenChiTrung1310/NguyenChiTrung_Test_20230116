import React from 'react';
import { ReactComponent as ScrollToTopBtn } from '@/assets/images/scroll_top.svg';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='fixed bg-pink bottom-3 right-3  cursor-pointer'>
      <div
        onClick={scrollToTop}
        className='fixed bg-transparent bottom-3 right-3 lg:bottom-5 tablet:right-24 cursor-pointer'
      >
        <ScrollToTopBtn />
      </div>
    </div>
  );
};

export default ScrollToTop;
