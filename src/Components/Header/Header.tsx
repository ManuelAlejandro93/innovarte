import { TopBanner } from './TopBanner';
import { Navbar } from './Navbar';

export const Header = ({ id }: { id: string }) => {
  return (
    <header id={id}>
      <TopBanner></TopBanner>
      <Navbar></Navbar>
    </header>
  );
};
