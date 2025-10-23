import { HambMenu, NavbarAnchors } from '@/Components';
import { fontsizes, imgSizes } from '@/Standars';

import { InnovarteIcon } from '@/Icons';
import * as navigationIds from '@/Data/NavigationIds';

export const Navbar = () => {
  return (
    <nav
      className={`navbar grid grid-cols-2 md:grid-cols-1 py-4 md:px-5 md:py-2 lg:px-10 lg:py-2 ${fontsizes.general}`}
    >
      <div className='section-routes flex items-center md:justify-between md:w-full'>
        <InnovarteIcon
          className={`${imgSizes} hover:cursor-pointer rounded-md`}
        />
        <NavbarAnchors
          text='Home'
          navigationID={navigationIds.homeID}
        />
        <NavbarAnchors
          text='Nuestras Areas'
          navigationID={navigationIds.coursesID}
        />
        <NavbarAnchors
          text='Testimonios'
          navigationID={navigationIds.testimonialsID}
        />
        <NavbarAnchors
          text='Precios'
          navigationID={navigationIds.pricingID}
        />
        <NavbarAnchors
          text='Preguntas'
          navigationID={navigationIds.faqID}
        />
      </div>
      <div className='flex justify-end md:hidden'>
        <HambMenu />
        {/* <a
          href='#'
          className='text-center p-2 lg:p-2 xl:p-4'
        >
          Sign Up
        </a>
        <a
          href='#'
          className='bg-app-blue-50 text-app-white-95 rounded-md p-2 lg:p-2 xl:py-4 xl:px-8'
        >
          Login
        </a> */}
      </div>
    </nav>
  );
};
