import { ChildrenProp } from '@/Interfaces';

//Contenedor de todas las secciones
export const SectionContainer = ({ children }: ChildrenProp) => {
  return <div className='grid space-y-16'>{children}</div>;
};
