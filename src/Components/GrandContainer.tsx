import { ChildrenProp } from '@/Interfaces';

//Contains header && main content but not footer
export const GrandContainer = ({ children }: ChildrenProp) => {
  return <div className='w-full mx-5 my-5'>{children}</div>;
};
