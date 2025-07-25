export const Hero = () => {
  return (
    <div className='pt-16 space-y-10'>
      <div className='row1'>
        <div className='flex justify-center'>
          <img
            className='mr-4'
            src='/Icons/flash-icon.png'
            alt='logo-image'
          />
          <h2 className='text-5xl font-bold text-app-grey-15'>
            <span className='text-app-orange-50'>Unlock</span> Your Creative
            Potential
          </h2>
          <img
            className='rotate-90 relative bottom-6'
            src='/Icons/abstract-lines.png'
            alt='logo-image'
          />
        </div>
      </div>
      <div className='row2 grid space-y-2'>
        <p className='text-center text-4xl text-app-grey-15 font-medium'>
          with Online Desing and Development Courses
        </p>
        <p className='text-center text-lg'>
          learn from industry expert and enhace your skills
        </p>
      </div>
      <div className='row3 flex justify-center'>
        <a
          href=''
          className='bg-app-orange-50 text-app-white-95 rounded-md p-2 md:p-2 lg:p-2 xl:py-4 xl:px-8 mr-2 text-xl'
        >
          Explore
        </a>
        <a
          href=''
          className='rounded-md p-2 md:p-2 lg:p-2 xl:py-4 xl:px-8 bg-white text-xl'
        >
          View Pricing
        </a>
      </div>
    </div>
  );
};
