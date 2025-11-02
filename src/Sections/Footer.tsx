import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  CopyrightIcon
} from 'lucide-react';
import { AppGeneralText, FooterAnchor, WhatsappIcon } from '@/Components';
import { imgSizes } from '@/Standars';
import { InnovarteIcon } from '@/Icons';
import * as navigationIds from '@/Data/NavigationIds';
import { facebook, instagram } from '@/Data';

export const Footer = () => {
  return (
    <div className='footer-container w-full grid gap-4'>
      <div className='two-upper-div-container grid gap-4 md:flex md:flex-row md:justify-between'>
        <div className='grid gap-2'>
          <a href={navigationIds.homeID}>
            <InnovarteIcon className={`${imgSizes} rounded-md`} />
          </a>
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
        <div className='flex justify-between'>
          <div className='grid gap-2'>
            <FooterAnchor
              navigationID={navigationIds.homeID}
              text='Home'
              className='font-bold'
              text_color='text-app-blue-50'
            />
            <FooterAnchor
              navigationID={navigationIds.benefitsID}
              text='Beneficios'
            />
            <FooterAnchor
              navigationID={navigationIds.coursesID}
              text='Nuestras Areas'
            />
            <FooterAnchor
              navigationID={navigationIds.testimonialsID}
              text='Testimonios'
            />
            <FooterAnchor
              navigationID={navigationIds.faqID}
              text='Preguntas Frecuentes'
            />
          </div>
          <div>
            <AppGeneralText
              className='font-bold'
              text='Social Profiles'
              text_color='text-app-blue-50'
            />

            <div className='grid grid-cols-3 gap-2'>
              <a
                href={facebook}
                target='_blank'
              >
                <FacebookIcon className='hover:text-app-blue-50' />
              </a>
              <a
                href={instagram}
                target='_blank'
              >
                <InstagramIcon className='hover:text-app-blue-50' />
              </a>
              <a
                href='https://wa.me/573143415131?text=Hola,%20quisiera%20por%20favor%20que%20me%20brindaran%20información%20sobre%20el%20preicfes.'
                target='_blank'
              >
                <WhatsappIcon className='w-8 md:w-9 hover:text-app-blue-50' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <CopyrightIcon className='text-app-grey-30' />
        <AppGeneralText
          text={'2025 Innovarte All Rigths Reserved'}
          className='ml-2'
        />
      </div>
    </div>
  );
};
