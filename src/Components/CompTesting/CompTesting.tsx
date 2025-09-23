import { ViewAllReadFullButton } from '@/Components';
export const CompTesting = () => {
  return (
    <div>
      <span className='text-red-400'>Testing Component</span>
      <ViewAllReadFullButton isViewAllButton></ViewAllReadFullButton>
      <ViewAllReadFullButton isViewAllButton={false}></ViewAllReadFullButton>
    </div>
  );
};
