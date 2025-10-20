import { Children_Class_Interface } from '@/Interfaces';

export const TestimonialGrid = ({
  children,
  className
}: Children_Class_Interface) => {
  return (
    <div
      className={`grid grid-cols-1 grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2 md:gap-4 lg:gap-6 ${className}`}
      id='testimonial'
    >
      {children ?? <></>}
    </div>
  );
};
