export const Hero = () => {
  return (
    <div className='pt-8 md:pt-16 space-y-5 md:space-y-10'>
      <div className='row1'>
        <div className='flex justify-center items-center'>
          <img
            className='mr-2 md:mr-4 w-6 h-auto md:w-10'
            src='/Icons/flash-icon.png'
            alt='logo-image'
          />
          <h2 className='text-lg md:text-3xl lg:text-5xl font-bold text-app-grey-15'>
            <span className='text-app-orange-50'>Unlock</span> Your Creative
            Potential
          </h2>
          <img
            className='w-6 h-auto md:w-10 rotate-90 relative bottom-6'
            src='/Icons/abstract-lines.png'
            alt='logo-image'
          />
        </div>
      </div>
      <div className='row2 grid space-y-2 px-4 md:p-0'>
        <p className='text-center text-sm md:text-center md:text-2xl lg:text-4xl text-app-grey-15 font-medium'>
          with Online Desing and Development Courses
        </p>
        <p className='text-center text-xs md:text-sm lg:text-lg'>
          learn from industry expert and enhace your skills
        </p>
      </div>
      <div className='row3 grid grid-cols-2 text-center md:grid md:grid-cols-2 lg:flex lg:justify-center text-xs lg:text-xl'>
        <a
          href=''
          className='bg-app-orange-50 text-app-white-95 rounded-md p-2 md:p-2 lg:p-2 xl:py-4 xl:px-8 mr-2'
        >
          Explore
        </a>
        <a
          href=''
          className='rounded-md p-2 md:p-2 lg:p-2 xl:py-4 xl:px-8 bg-white'
        >
          View Pricing
        </a>
      </div>
    </div>
  );
};
