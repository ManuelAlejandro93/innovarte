import { ChildrenProp } from '@/Interfaces';

export const OurCoursesGrid = ({ children }: ChildrenProp) => {
  return (
    <div className='grid grid-cols-1 grid-rows-6 gap-6 md:grid-cols-2 md:grid-rows-3 md:gap-4 lg:gap-6'>
      {children ?? <></>}
    </div>
  );
};
