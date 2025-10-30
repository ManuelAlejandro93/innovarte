import { useDispatch, useSelector } from 'react-redux';
import { RootState, onClickFAQToggleButton } from '@/Store';

import { FAQGrid } from '@/Components';
import {
  AppToggleButton,
  FAQHeader,
  FAQSingleQuestionCard
} from '@/Components';
import { yellowButtonsHover } from '@/UI';
import { faq_header_data as faq_header, faqID } from '@/Data';

export const FAQ = () => {
  const { FAQToggleButtonText, FAQItemOnLayout } = useSelector(
    (state: RootState) => state.faqReducer
  );
  const dispatch = useDispatch();

  return (
    <FAQGrid>
      <div
        className='rounded-lg p-4 pb-8 md:p-6 lg:p-8 xl:p-12'
        id={faqID}
      >
        <FAQHeader
          title={faq_header.title ?? 'Frecuently Asked Questions'}
          subtitle={
            faq_header.description ??
            'Still you have any questions? Contact our team via support@innovarte.com'
          }
        />

        <AppToggleButton
          text={FAQToggleButtonText}
          toogleFunction={() => dispatch(onClickFAQToggleButton())}
          className={yellowButtonsHover}
        ></AppToggleButton>
      </div>

      <div className='grid gap-2'>
        {FAQItemOnLayout.map((faq, i) => (
          <FAQSingleQuestionCard
            key={`${i}_${faq.question}`}
            question={faq.question}
            answer={faq.answer}
            isShown={faq.isShown}
          />
        ))}
      </div>
    </FAQGrid>
  );
};
