import React from 'react';

const ColumnPage = () => {
  return (
    <section id='column-page'>
      <div className='w-full container mt-14'>
        <div className='w-full h-36 grid grid-cols-4 gap-8'>
          <div className='bg-dark-600 flex-center flex-col'>
            <p className='uppercase text-primary-300 text-center text-[22px] leading-[27px] tracking-[0.11px] font-inter'>
              RECOMMENDED COLUMN
            </p>
            <hr className='bg-white w-14 mt-[10px]' />
            <p className='mt-2 text-white text-[18px] font-light leading-[26px]'>
              オススメ
            </p>
          </div>
          <div className='bg-dark-600 flex-center flex-col'>
            <p className='uppercase text-primary-300 text-center text-[22px] leading-[27px] tracking-[0.11px] font-inter'>
              RECOMMENDED DIET
            </p>
            <hr className='bg-white w-14 mt-[10px]' />
            <p className='mt-2 text-white text-[18px] font-light leading-[26px]'>
              ダイエット
            </p>
          </div>
          <div className='bg-dark-600 flex-center flex-col'>
            <p className='uppercase text-primary-300 text-center text-[22px] leading-[27px] tracking-[0.11px] font-inter'>
              RECOMMENDED BEAUTY
            </p>
            <hr className='bg-white w-14 mt-[10px]' />
            <p className='mt-2 text-white text-[18px] font-light leading-[26px]'>
              美容
            </p>
          </div>
          <div className='bg-dark-600 flex-center flex-col'>
            <p className='uppercase text-primary-300 text-center text-[22px] leading-[27px] tracking-[0.11px] font-inter'>
              RECOMMENDED HEALTH
            </p>
            <hr className='bg-white w-14 mt-[10px]' />
            <p className='mt-2 text-white text-[18px] font-light leading-[26px]'>
              健康
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnPage;
