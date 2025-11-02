import { useEffect, useState } from 'react';

export const useGetInGetOutUIEffect = () => {
  const [uiEffectDynamicClass, setUiEffectDynamicClass] = useState<string>('');

  const [orderForEffectToggle, setOrderForEffectToggle] =
    useState<boolean>(false);

  const [renderingFullTestimonialToggle, setRenderingFullTestimonialToggle] =
    useState<boolean>(false);

  useEffect(() => {
    if (orderForEffectToggle) {
      setUiEffectDynamicClass('fade-donw');
      setRenderingFullTestimonialToggle((state) => !state);
    } else {
      setUiEffectDynamicClass('jump-out');
      const timer = setTimeout(() => {}, 5000);
      setRenderingFullTestimonialToggle((state) => !state);
      clearTimeout(timer);
    }
  }, [orderForEffectToggle]);

  const onClickOrderForEffectToggle = () => {
    setOrderForEffectToggle((state) => !state);
  };

  return {
    uiEffectDynamicClass,
    renderingFullTestimonialToggle,
    onClickOrderForEffectToggle
  };
};
