import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IListColumnData } from '@/interfaces';
import { filterListPerPage, listColumnData } from '@/utils/utils';

import Tag from '@/components/Tag';
import Button from '@/components/@cores/Button';

const ColumnPage = () => {
  const [list, setList] = useState<IListColumnData[]>(listColumnData);
  const [numPages, setNumPages] = useState<number>(8);
  const [loading, setLoading] = useState<boolean>(false);
  const [counterClick, setCounterClick] = useState<number>(1); // CLICKING COUNTER ON THE "LOAD MORE" BUTTON

  useEffect(() => {
    const filterList = filterListPerPage(list, numPages);
    setList(filterList);
  }, []);

  const onLoadMore = (counter: number) => {
    setLoading(true);
    setTimeout(() => {
      setCounterClick(counter);
      setNumPages(counter * 8);
      const filterList = filterListPerPage(listColumnData, counter * 8);
      setList([...filterList]);
      setLoading(false);
    }, 500);
  };

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

        {/* LIST COLUMN */}
        <div className='mt-14'>
          <div className='w-full h-full grid grid-cols-4 gap-2'>
            {list.map((item: IListColumnData, index: number) => (
              <div key={index}>
                <div className='w-full h-[144.47px] aspect-square relative'>
                  <img
                    alt={`thumb-col-${index}`}
                    src={item.thumbnail}
                    className='object-cover absolute inset-0 h-full w-full'
                  />
                  <div className='absolute bottom-0 left-0'>
                    <Tag
                      text={
                        <span className='flex-between'>
                          <span>{item.tagDate}</span>
                          <span className='pl-3'>{item.tagTime}</span>
                        </span>
                      }
                    />
                  </div>
                </div>
                <div className='mt-2'>
                  <p className='text-[15px] font-light leading-[22px] tracking-[0.075px] text-dark-500'>
                    {item.title}
                  </p>
                  <NavLink
                    to='#DHA'
                    className='text-primary text-xs font-light leading-[22px]'
                  >
                    #魚料理 #和食 #DHA
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          {list.length >= 8 && list.length < listColumnData.length && (
            <div className='w-full'>
              <Button
                loading={loading}
                type='button'
                onClick={() => onLoadMore(counterClick + 1)}
                className='mt-5 mx-auto'
              >
                記録をもっと見る
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ColumnPage;
