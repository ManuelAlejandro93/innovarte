import { FAQGrid } from '@/Components';
import { AppButton, FAQHeader, FAQSingleQuestionCard } from '@/Components';
import { yellowButtonsHover } from '@/UI';
import { FAQs } from '@/Data';

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

        <AppButton
          text={'See all FAQ´s'}
          className={yellowButtonsHover}
        ></AppButton>
      </div>

      <div className='grid gap-2'>
        {FAQs.map((faq, i) => (
          <FAQSingleQuestionCard
            key={`${i}_${faq.question}`}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </FAQGrid>
  );
};
