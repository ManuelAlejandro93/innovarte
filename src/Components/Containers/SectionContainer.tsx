import { ChildrenProp } from '@/Interfaces';

//Contenedor de todas las secciones
export const SectionContainer = ({ children }: ChildrenProp) => {
  return (
    <div className='grid space-y-16 px-0 md:px-5 lg:px-10'>{children}</div>
  );
};
