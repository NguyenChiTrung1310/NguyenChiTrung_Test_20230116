import BannerLeft from '@/assets/images/home/d01.jpg';
import BannerRight from '@/assets/images/home/main_graph.png';

const HomePage = () => {
  return (
    <section id='top-page' className='w-full h-auto'>
      <div className='w-full h-auto tablet:h-[312px] flex tablet_max:flex-col container-xl'>
        <div className='w-full tablet:w-[42.1875%] h-full aspect-square tablet:aspect-video relative'>
          <img
            alt='top-page-img-left'
            src={BannerLeft}
            className='object-cover absolute inset-0 h-auto max-h-full w-full'
          />
        </div>
        <div className='w-full tablet:w-[57.8125%] bg-dark-600 h-full flex-center'>
          <img alt='top-page-img-right' src={BannerRight} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
