import { Children_Class_Interface } from '@/Interfaces';

export const FAQGrid = ({ children, className }: Children_Class_Interface) => {
  return (
    <div
      className={`grid p-4 md:p-6 lg:p-8 xl:p-12 gap-4 md:gap-8 lg:gap-10 xl:gap-14 md:grid-cols-2 ${className}`}
    >
      {children ?? ''}
    </div>
  );
};
