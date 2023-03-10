import React from 'react';

import MyRecordChart from '@/assets/images/record/body-record.png';

import Tag from '@/components/Tag';
import MyDiary from '@/pages/MyRecord/MyDiary';
import MyExercise from '@/pages/MyRecord/MyExercise';

import './style.scss';
import BodyRecordChart from '@/pages/MyRecord/BodyRecordChart';

const MyRecordPage = () => {
  return (
    <section id='my-record-page'>
      <div className='w-full container mt-14'>
        {/* SERVICES LIST */}
        <div className='w-full grid grid-cols-1 tablet:grid-cols-3 gap-12'>
          <div className='record-1 uppercase flex-center flex-col'>
            <p className='font-inter text-[25px] font-normal leading-[30px] tracking-[0.125px] text-primary-300'>
              BODY RECORD
            </p>
            <Tag
              text='自分のカラダの記録'
              className='mt-[10px] bg-primary w-40 h-5 [&>p]:text-sm [&>p]:font-light [&>p]:font-notoSan'
            />
          </div>

          <div className='record-2 uppercase flex-center flex-col'>
            <p className='font-inter text-[25px] font-normal leading-[30px] tracking-[0.125px] text-primary-300'>
              MY EXERCISE
            </p>
            <Tag
              text='自分の運動の記録'
              className='mt-[10px] bg-primary w-40 h-5 [&>p]:text-sm [&>p]:font-light [&>p]:font-notoSan'
            />
          </div>

          <div className='record-3 uppercase flex-center flex-col'>
            <p className='font-inter text-[25px] font-normal leading-[30px] tracking-[0.125px] text-primary-300'>
              MY DIARY
            </p>
            <Tag
              text='自分の日記'
              className='mt-[10px] bg-primary w-40 h-5 [&>p]:text-sm [&>p]:font-light [&>p]:font-notoSan'
            />
          </div>
        </div>

        {/* BODY RECORD */}
        <div className='mt-14 w-full h-auto bg-dark-500 py-4 px-6'>
          <div className='grid grid-cols-12 font-inter'>
            <div className='col-span-1'>
              <p className='text-[15px] font-normal leading-[18px] tracking-[0.15px] text-white uppercase'>
                BODY RECORD
              </p>
            </div>
            <div className='col-span-11 ml-5'>
              <p className='text-[22px] font-normal leading-[27px] tracking-[0.11px] text-white'>
                2021.05.21
              </p>
            </div>
          </div>
          <div className='py-4'>
            <BodyRecordChart />
          </div>
        </div>

        {/* MY EXERCISE */}
        <div className='mt-14 w-full h-auto bg-dark-500 py-4 px-6'>
          <div className='grid grid-cols-12 font-inter'>
            <div className='col-span-1'>
              <p className='text-[15px] font-normal leading-[18px] tracking-[0.15px] text-white uppercase'>
                MY EXERCISE
              </p>
            </div>
            <div className='col-span-11 ml-5'>
              <p className='text-[22px] font-normal leading-[27px] tracking-[0.11px] text-white'>
                2021.05.21
              </p>
            </div>
          </div>
          <MyExercise />
        </div>

        {/* MY DIARY */}
        <div className='mt-14 w-full h-auto'>
          <p className='text-[22px] font-normal font-inter leading-[27px] tracking-[0.11px] uppercase text-dark-500'>
            MY DIARY
          </p>
          <MyDiary />
        </div>
      </div>
    </section>
  );
};

export default MyRecordPage;
