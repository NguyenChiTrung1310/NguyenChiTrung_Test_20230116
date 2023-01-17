import BannerLeft from '@/assets/images/home/d01.jpg';
import BannerRight from '@/assets/images/home/main_graph.png';
import MorningImg from '@/assets/images/home/morning.png';
import LunchImg from '@/assets/images/home/lunch.png';
import DinnerImg from '@/assets/images/home/dinner.png';
import SnackImg from '@/assets/images/home/snack.png';
import Pie from '@/components/Pie';
import { useEffect, useState } from 'react';
import Tag from '@/components/Tag';
import Button from '@/components/@cores/Button';
import { IList } from '@/interfaces';
import { filterListPerPage } from '@/utils/utils';

const array: IList[] = [
  {
    schedule: [
      {
        thumbnail: '../../assets/images/home/m01.jpg',
        text: '05.21.Morning',
      },
      {
        thumbnail: '../../assets/images/home/l03.jpg',
        text: '05.21.Lunch',
      },
      {
        thumbnail: '../../assets/images/home/d01.jpg',
        text: '05.21.Dinner',
      },
      {
        thumbnail: '../../assets/images/home/l01.jpg',
        text: '05.21.Snack',
      },
    ],
  },
  {
    schedule: [
      {
        thumbnail: '../../assets/images/home/m01.jpg',
        text: '05.20.Morning',
      },
      {
        thumbnail: '../../assets/images/home/l02.jpg',
        text: '05.20.Lunch',
      },
      {
        thumbnail: '../../assets/images/home/d02.jpg',
        text: '05.20.Dinner',
      },
      {
        thumbnail: '../../assets/images/home/s01.jpg',
        text: '05.20.Snack',
      },
    ],
  },
  {
    schedule: [
      {
        thumbnail: '../../assets/images/home/m01.jpg',
        text: '05.21.Morning',
      },
      {
        thumbnail: '../../assets/images/home/l03.jpg',
        text: '05.21.Lunch',
      },
      {
        thumbnail: '../../assets/images/home/d01.jpg',
        text: '05.21.Dinner',
      },
      {
        thumbnail: '../../assets/images/home/l01.jpg',
        text: '05.21.Snack',
      },
    ],
  },
  {
    schedule: [
      {
        thumbnail: '../../assets/images/home/m01.jpg',
        text: '05.20.Morning',
      },
      {
        thumbnail: '../../assets/images/home/l02.jpg',
        text: '05.20.Lunch',
      },
      {
        thumbnail: '../../assets/images/home/d02.jpg',
        text: '05.20.Dinner',
      },
      {
        thumbnail: '../../assets/images/home/s01.jpg',
        text: '05.20.Snack',
      },
    ],
  },
];

const HomePage = () => {
  const [list, setList] = useState<IList[]>(array);
  const [numPages, setNumPages] = useState<number>(2);
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
      setNumPages(counter * 2);
      const filterList = filterListPerPage(array, counter * 2);
      setList([...filterList]);
      setLoading(false);
    }, 500);
  };

  return (
    <section id='top-page' className='w-full h-auto'>
      {/* BANNER */}
      <div className='w-full h-auto tablet:h-[312px] flex tablet_max:flex-col container-xl'>
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
        <div className='w-full grid grid-cols-4 py-6'>
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
        <div>
          {list.map((item, index) => (
            <div
              key={index}
              className='w-full h-full grid grid-cols-4 gap-2 m-2'
            >
              {item.schedule.map((child, idx) => (
                <div
                  key={idx}
                  className='w-full h-[234px] aspect-square relative'
                >
                  <img
                    alt={child.text}
                    src={child.thumbnail}
                    className='object-cover absolute inset-0 h-full w-full'
                  />
                  <div className='absolute bottom-0 left-0'>
                    <Tag text={child.text} />
                  </div>
                </div>
              ))}
            </div>
          ))}

          {list.length >= 2 && list.length < array.length && (
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

export default HomePage;
