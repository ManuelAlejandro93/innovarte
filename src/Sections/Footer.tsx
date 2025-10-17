import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';

import { imgSizes } from '@/Standars';
import { AppGeneralText, FooterAnchor } from '@/Components';

export const Footer = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-between md:flex-row '>
        <div className='space-y-2'>
          <img
            src='Logos/Logo-desktop.png'
            alt='company-logo'
            className={`${imgSizes}`}
          />
          <div className='flex items-center'>
            <MailIcon />
            <AppGeneralText
              text='fundacioninnovarte@gmail.com'
              className='ml-2'
            />
          </div>
          <div className='flex items-center'>
            <PhoneIcon />
            <AppGeneralText
              text='+57 314-341-51-31'
              className='ml-2'
            />
          </div>
          <div className='flex items-center'>
            <MapPinIcon />
            <AppGeneralText
              text='Armenia, Quindío. Colombia.'
              className='ml-2'
            />
          </div>
        </div>
        <div className='flex '>
          <div className='grid h-full '>
            <FooterAnchor
              text='Home'
              className='font-bold'
            />
            <FooterAnchor text='Benefits' />
            <FooterAnchor text='Our Courses' />
            <FooterAnchor text='Our Testimonials' />
            <FooterAnchor text='Our FAQ' />
          </div>
          <div>gordoo</div>
        </div>
      </div>
      <div className=' bg-red-200'>dddd</div>
    </div>
  );
};
