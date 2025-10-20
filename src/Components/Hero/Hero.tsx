import { Bolt } from '@/Icons';
import { fontsizes, imgSizes } from '@/Standars';

export const Hero = () => {
  return (
    <div className='pt-8 md:pt-16 space-y-5 md:space-y-10'>
      <div className='row1'>
        <div className='flex justify-center items-center'>
          {/* <img
            className={`${imgSizes} mr-2`}
            src='/Icons/flash-icon.png'
            alt='logo-image'
          /> */}
          <Bolt className={`w-10 md:w-16 lg:w-20 xl:w-28 text-yellow-500`} />
          <h2 className={`${fontsizes.titles} font-bold text-app-grey-15`}>
            <span className='text-app-blue-50'>Unlock</span> Your{' '}
            <span className='text-yellow-500 '>Creative </span>
            Potential
          </h2>
          <img
            className={`${imgSizes} rotate-90 relative bottom-4 lg:bottom-7`}
            src='/Icons/abstract-lines.png'
            alt='logo-image'
          />
        </div>
      </div>
      <div className='row2 grid space-y-2 px-4 md:p-0'>
        <p
          className={`text-center ${fontsizes.subtitles} md:text-center text-app-grey-15`}
        >
          with Online Desing and Development Courses
        </p>
        <p className={`text-center ${fontsizes.general}`}>
          learn from industry expert and enhace your skills
        </p>
      </div>
      <div
        className={`row3 grid grid-cols-2 text-center md:grid md:grid-cols-2 lg:flex lg:justify-center ${fontsizes.general}`}
      >
        <a
          href=''
          className='bg-app-blue-50 text-app-white-95 rounded-md p-2 md:p-2 lg:p-2 xl:py-4 xl:px-8 mr-2 hover:bg-app-blue-75 hover:text-white'
        >
          Explore
        </a>
        <a
          href=''
          className='rounded-md p-2 md:p-2 lg:p-2 xl:py-4 xl:px-8 bg-white hover:bg-app-blue-75 hover:text-white'
        >
          View Pricing
        </a>
      </div>
    </div>
  );
};
