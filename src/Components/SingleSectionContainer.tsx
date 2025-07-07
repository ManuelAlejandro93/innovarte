import { ChildrenProp } from '@/Interfaces';

export const SingleSectionContainer = ({ children }: ChildrenProp) => {
  return <div className='bg-slate-400'>{children}</div>;
};
