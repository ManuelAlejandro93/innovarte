export const Navbar = () => {
  return (
    <nav className='navbar grid grid-cols-2 py-4 md:px-5 md:py-2 lg:px-10 lg:py-2'>
      <div className='section-routes flex items-center md:justify-between lg:justify-between'>
        <img
          src='Logos/Logo-desktop.png'
          alt='company-logo'
          className='w-12 md:w-8 md:h-auto lg:w-10 lg:h-auto xl:w-14 xl:h-auto'
        />
        <a
          href=''
          className='bg-app-white-95 rounded-lg hidden md:block md:py-2 md:px-0 lg:py-2 lg:px-1 xl:p-4'
        >
          Home
        </a>
        <a
          href=''
          className='hidden md:block md:py-2 lg:p-2 xl:p-4'
        >
          Courses
        </a>
        <a
          href=''
          className='hidden md:block md:py-2 lg:p-2 xl:p-4'
        >
          About us
        </a>
        <a
          href=''
          className='hidden md:block md:py-2 lg:p-2 xl:p-4'
        >
          Pricing
        </a>
        <a
          href=''
          className='hidden md:block md:py-2 lg:p-2 xl:p-4'
        >
          Contact
        </a>
      </div>
      <div className='flex justify-end'>
        <a
          href=''
          className='p-4 md:p-2 lg:p-2 xl:p-4'
        >
          Sign Up
        </a>
        <a
          href=''
          className='bg-app-orange-50 text-app-white-95 rounded-md p-4 md:p-2 lg:p-2 xl:py-4 xl:px-8'
        >
          Login
        </a>
      </div>
    </nav>
  );
};
