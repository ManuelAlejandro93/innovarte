export const BenefitGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-6'>
      {children}
    </div>
  );
};
