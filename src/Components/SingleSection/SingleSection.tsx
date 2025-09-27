import { SingleSectionHeader } from '@/Components';
import { SingleSectionInterface } from '@/Interfaces';

export const SingleSection = ({
  children,
  title,
  subtitle,
  viewAllButton
}: SingleSectionInterface) => {
  return (
    <>
      <SingleSectionHeader
        title={title}
        subtitle={subtitle}
        viewAllButton={viewAllButton}
      />
      {children}
    </>
  );
};
