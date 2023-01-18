import { useEffect, useState } from 'react';

import BannerLeft from '@/assets/images/home/d01.jpg';
import BannerRight from '@/assets/images/home/main_graph.png';
import MorningImg from '@/assets/images/home/morning.png';
import LunchImg from '@/assets/images/home/lunch.png';
import DinnerImg from '@/assets/images/home/dinner.png';
import SnackImg from '@/assets/images/home/snack.png';

import { IList } from '@/interfaces';
import { filterListPerPage, listDataTopPage } from '@/utils/utils';

import Pie from '@/components/Pie';
import Tag from '@/components/Tag';
import Button from '@/components/@cores/Button';

const HomePage = () => {
  const [list, setList] = useState<IList[]>(listDataTopPage);
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
      const filterList = filterListPerPage(listDataTopPage, counter * 8);
      setList([...filterList]);
      setLoading(false);
    }, 500);
  };

  return (
    <section id='top-page' className='w-full h-auto'>
      {/* BANNER */}
      <div className='w-full h-auto tablet:h-[312px] flex tablet_max:flex-col tablet_max:gap-8 tablet_max:mt-8 container-xl'>
        <div className='w-full tablet:w-[42.1875%] h-full aspect-square tablet:aspect-video relative'>
          <img
            alt='top-page-img-left'
            src={BannerLeft}
            className='object-cover absolute inset-0 h-auto max-h-full w-full'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Pie percentage={75} colour='white' />
          </div>
        </div>
        <div className='w-full tablet:w-[57.8125%] bg-dark-600 h-full flex-center'>
          <img alt='top-page-img-right' src={BannerRight} />
        </div>
      </div>

      <div className='w-full h-auto container'>
        {/* SERVICES */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 sm_max:gap-10 py-6'>
          <div className='justify-self-center relative aspect-square w-[136px] h-full cursor-pointer'>
            <img
              alt='morning'
              src={MorningImg}
              className='absolute inset-0 w-full max-h-full h-auto object-cover'
            />
          </div>
          <div className='justify-self-center relative aspect-square w-[136px] h-full cursor-pointer'>
            <img
              alt='morning'
              src={LunchImg}
              className='absolute inset-0 w-full max-h-full h-auto object-cover'
            />
          </div>
          <div className='justify-self-center relative aspect-square w-[136px] h-full cursor-pointer'>
            <img
              alt='morning'
              src={DinnerImg}
              className='absolute inset-0 w-full max-h-full h-auto object-cover'
            />
          </div>
          <div className='justify-self-center relative aspect-square w-[136px] h-full cursor-pointer'>
            <img
              alt='morning'
              src={SnackImg}
              className='absolute inset-0 w-full max-h-full h-auto object-cover'
            />
          </div>
        </div>

        {/* LIST */}
        <div className='sm_max:mt-8'>
          <div className='w-full h-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2'>
            {list.map((item: IList, index: number) => (
              <div
                key={index}
                className='w-full h-[234px] aspect-square relative'
              >
                <img
                  alt={item.text}
                  src={item.thumbnail}
                  className='object-cover absolute inset-0 h-full w-full'
                />
                <div className='absolute bottom-0 left-0'>
                  <Tag text={item.text} />
                </div>
              </div>
            ))}
          </div>

          {list.length >= 8 && list.length < listDataTopPage.length && (
            <div className='w-full'>
              <Button
                loading={loading}
                type='button'
                onClick={() => onLoadMore(counterClick + 1)}
                className='mt-5 mx-auto xs_max:min-w-full'
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

export default HomePage;
