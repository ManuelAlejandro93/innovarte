import { useEffect, useState } from 'react';

export const useGetInGetOutUIEffect = () => {
  const [uiEffectDynamicClass, setUiEffectDynamicClass] = useState<string>('');

  const [orderForEffectToggle, setOrderForEffectToggle] =
    useState<boolean>(false);

  const [renderingFullTestimonialToggle, setRenderingFullTestimonialToggle] =
    useState<boolean>(false);

  useEffect(() => {
    if (orderForEffectToggle) {
      setUiEffectDynamicClass('animate-fade-down');
      setRenderingFullTestimonialToggle(true);
    } else {
      setUiEffectDynamicClass('animate-jump-out');
      const customTimeOutTimer = setTimeout(() => {
        setRenderingFullTestimonialToggle(false);
      }, 500);
      return () => clearTimeout(customTimeOutTimer);
    }
  }, [orderForEffectToggle]);

  const onClickOrderForEffectToggle = () => {
    setOrderForEffectToggle((state) => !state);
  };

  return {
    uiEffectDynamicClass,
    renderingFullTestimonialToggle,
    orderForEffectToggle,
    onClickOrderForEffectToggle
  };
};
