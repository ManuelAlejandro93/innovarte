import { Children_Class_Interface } from '@/Interfaces';

export const PricingGrid = ({
  children,
  className
}: Children_Class_Interface) => {
  return (
    <div
      className={`flex p-4 md:p-6 lg:p-8 xl:p-12 gap-6 md:gap-8 lg:gap-10 xl:gap-14 flex-col md:flex-row ${className}`}
    >
      {children ?? ''}
    </div>
  );
};
