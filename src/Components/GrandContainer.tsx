import { ChildrenProp } from '@/Interfaces';

//Contains header && main content but not footer
export const GrandContainer = ({ children }: ChildrenProp) => {
  return <div className='px-5 py-5'>{children}</div>;
};
