import { ReactNode } from 'react';
import { ChildrenProp } from '@/Interfaces';

export const AppContainer = ({ children }: ChildrenProp) => {
  return <div className='mx-5 my-5'>{children}</div>;
};
