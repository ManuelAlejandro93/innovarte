import { ReactNode } from 'react';

export interface SingleSectionInterface {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  viewAllButton?: ReactNode;
  sectionId: string;
}
