import { ChildrenProp } from '@/Interfaces';
export const AppContainer = ({ children }: ChildrenProp) => {
  return <div className='w-full'>{children}</div>;
};
