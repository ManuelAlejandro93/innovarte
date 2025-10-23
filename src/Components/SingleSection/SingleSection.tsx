import { SingleSectionHeader } from '@/Components';
import { SingleSectionInterface } from '@/Interfaces';

export const SingleSection = ({
  children,
  title,
  subtitle,
  viewAllButton,
  sectionId
}: SingleSectionInterface) => {
  return (
    <div id={sectionId}>
      <SingleSectionHeader
        title={title}
        subtitle={subtitle}
        viewAllButton={viewAllButton}
      />
      {children}
    </div>
  );
};
