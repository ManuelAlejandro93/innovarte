import { useState } from 'react';

export const useGetInGetOutUIEffect = () => {
  const [uiEffectDynamicClass, setUiEffectDynamicClass] = useState<string>('');

  const [orderForEffectToggle, setOrderForEffectToggle] =
    useState<boolean>(false);

  const [renderingFullTestimonialToggle, setRenderingFullTestimonialToggle] =
    useState<boolean>(false);
  return {};
};
