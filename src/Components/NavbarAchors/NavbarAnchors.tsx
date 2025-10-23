interface Props {
  text?: string;
  navigationID: string;
}

export const NavbarAnchors = ({ text, navigationID }: Props) => {
  return (
    <a
      className='bg-app-white-75 rounded-lg hidden md:block md:py-2 md:px-0 lg:py-2 lg:px-1 xl:p-4 hover:text-app-blue-50 hover:underline hover:cursor-pointer'
      href={`#${navigationID}`}
    >
      {text}
    </a>
  );
};
