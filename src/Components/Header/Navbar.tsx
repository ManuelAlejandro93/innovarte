export const Navbar = () => {
  return (
    <nav className='navbar grid grid-cols-2 lg:px-10 lg:py-2 xl:py-2'>
      <div className='section-routes flex justify-between'>
        <img
          src='Logos/Logo-desktop.png'
          alt='company-logo'
          className='lg:w-10 lg:h-auto xl:w-14 xl:h-auto'
        />
        <a
          href=''
          className='bg-app-white-95 rounded-lg lg:py-2 lg:px-1 xl:p-4'
        >
          Home
        </a>
        <a
          href=''
          className='lg:p-2 xl:p-4'
        >
          Courses
        </a>
        <a
          href=''
          className='lg:p-2 xl:p-4'
        >
          About us
        </a>
        <a
          href=''
          className='lg:p-2 xl:p-4'
        >
          Pricing
        </a>
        <a
          href=''
          className='lg:p-2 xl:p-4'
        >
          Contact
        </a>
      </div>
      <div className='flex justify-end'>
        <a
          href=''
          className='lg:p-2 xl:p-4'
        >
          Sign Up
        </a>
        <a
          href=''
          className='bg-app-orange-50 text-app-white-95 rounded-md lg:p-2 xl:py-4 xl:px-8'
        >
          Login
        </a>
      </div>
    </nav>
  );
};
