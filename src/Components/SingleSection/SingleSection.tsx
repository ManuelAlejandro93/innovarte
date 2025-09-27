import { SingleSectionHeader } from '@/Components';
import { SingleSectionInterface } from '@/Interfaces';

export const SingleSection = ({
  children,
  title,
  subtitle
}: SingleSectionInterface) => {
  return (
    <>
      <SingleSectionHeader
        title={title}
        subtitle={subtitle}
      />
      {children}
    </>
  );
};
