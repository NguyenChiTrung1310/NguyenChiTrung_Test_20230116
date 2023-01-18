import React, { memo, useEffect, useState } from 'react';

import { IListDiariesRecord } from '@/interfaces';
import { filterListPerPage, listDiariesRecord } from '@/utils/utils';

import Button from '@/components/@cores/Button';

const MyDiary = () => {
  const [list, setList] = useState<IListDiariesRecord[]>(listDiariesRecord);
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
      const filterList = filterListPerPage(listDiariesRecord, counter * 8);
      setList([...filterList]);
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <div className='mt-2 w-full h-auto grid xs:grid-cols-2 md:grid-cols-3 tablet:grid-cols-4 gap-3'>
        {list.map(({ date, time, title, description }, index) => (
          <div
            key={index}
            className='w-full h-[231px] border-2 border-solid border-[#707070] bg-white p-4'
          >
            <div className='[&>p]:text-[18px] [&>p]:leading-[22px] [&>p]:font-normal [&>p]:tracking-[0.09px] text-dark-500 font-inter'>
              <p>{date}</p>
              <p>{time}</p>
            </div>
            <div className='mt-2 [&>p]:text-[12px] [&>p]:font-light [&>p]:leading-[17px] [&>p]:tracking-[0.06px] text-dark-500'>
              <p>{title}</p>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
      {list.length >= 8 && list.length < listDiariesRecord.length && (
        <div className='w-full'>
          <Button
            loading={loading}
            type='button'
            onClick={() => onLoadMore(counterClick + 1)}
            className='mt-5 mx-auto sm_max:min-w-full'
          >
            記録をもっと見る
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(MyDiary);
