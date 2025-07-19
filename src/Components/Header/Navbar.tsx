export const Navbar = () => {
  return (
    <nav className='navbar grid grid-cols-2 px-10 py-2'>
      <div className='section-routes flex justify-between'>
        <img
          src='Logos/Logo-desktop.png'
          alt='company-logo'
          className='w-14 h-auto'
        />
        <a
          href=''
          className='bg-app-white-95 p-3 rounded-lg'
        >
          Home
        </a>
        <a
          href=''
          className='p-4'
        >
          Courses
        </a>
        <a
          href=''
          className='p-4'
        >
          About us
        </a>
        <a
          href=''
          className='p-4'
        >
          Pricing
        </a>
        <a
          href=''
          className='p-4'
        >
          Contact
        </a>
      </div>
      <div className='flex justify-end'>
        <a
          href=''
          className='p-4'
        >
          Sign Up
        </a>
        <a
          href=''
          className='py-4 px-8 bg-app-orange-50 text-app-white-95 rounded-md'
        >
          Login
        </a>
      </div>
    </nav>
  );
};
