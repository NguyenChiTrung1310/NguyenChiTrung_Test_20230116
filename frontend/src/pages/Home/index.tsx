import BannerLeft from '@/assets/images/home/d01.jpg';
import BannerRight from '@/assets/images/home/main_graph.png';
import Pie from '@/components/Pie';

const HomePage = () => {
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

      {/* SERVICES */}
    </section>
  );
};

export default HomePage;
