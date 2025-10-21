import { FAQGrid } from '@/Components';
import { AppButton, FAQHeader, FAQSingleQuestionCard } from '@/Components';
import { yellowButtonsHover } from '@/UI';
import { FAQs, faq_header_data as faq_header } from '@/Data';

export const FAQ = () => {
  return (
    <FAQGrid>
      <div className='rounded-lg p-4 pb-8 md:p-6 lg:p-8 xl:p-12'>
        <FAQHeader
          title={faq_header.title ?? 'Frecuently Asked Questions'}
          subtitle={
            faq_header.description ??
            'Still you have any questions? Contact our team via support@innovarte.com'
          }
        />

        <AppButton
          text={'Ver todas'}
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
