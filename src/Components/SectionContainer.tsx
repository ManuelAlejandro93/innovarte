import { ChildrenProp } from '@/Interfaces';

export const SectionContainer = ({ children }: ChildrenProp) => {
  return <div className='py-12 bg-slate-400'>{children}</div>;
};
