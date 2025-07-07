import { ReactNode } from 'react';
import { ChildrenProp } from '@/Interfaces';

//Contains header && main content but not footer
export const GrandContainer = ({ children }: ChildrenProp) => {
  return <div className='mx-5 my-5'>{children}</div>;
};
