import { FAQGrid, FAQHeader, AppButton } from '@/Components';
export const FAQ = () => {
  return (
    <FAQGrid>
      <div className='rounded-lg p-4 pb-8 md:p-6 lg:p-8 xl:p-12'>
        <FAQHeader
          title={'Frecuently Asked Questions'}
          subtitle={
            'Still you have any questions? Contact our team via support@innovarte.com'
          }
        />
        <AppButton text={'See all FAQ´s'}></AppButton>
      </div>
      <div className='w-full h-fit grid gap-4 rounded-lg border-2 border-app-white-90 p-4 md:p-6 lg:p-8 xl:p-12'>
        <h1>Gordooo</h1>
      </div>
    </FAQGrid>
  );
};
