import { IconInterface } from '@/Interfaces';
export const InnovarteIcon = ({ className, size }: IconInterface) => {
  return (
    <svg
      viewBox='0 0 240 240'
      xmlns='http://www.w3.org/2000/svg'
      width={size ?? 22}
      height={size ?? 22}
      className={`rounded-2xl ${className}`}
    >
      <rect
        width='100%'
        height='100%'
        fill='#03588C'
      />
      {/* <!-- Rueda amarilla --> */}
      <circle
        cx='130'
        cy='130'
        r='70'
        fill='#F2CB05'
      />
      <circle
        cx='130'
        cy='130'
        r='45'
        fill='#03588C'
      />
      {/* <!-- Patica 1 --> */}
      <rect
        x='60'
        y='-12'
        width='25'
        height='80'
        rx='15'
        fill='#F2CB05'
        transform='rotate(-45 125 58)'
      />
      {/* <!-- Patica 2 --> */}
      <rect
        x='110'
        y='-10'
        width='25'
        height='52'
        rx='15'
        fill='#F2CB05'
        transform='rotate(-45 166 63)'
      />
      {/* <!-- Patica 3 --> */}
      <rect
        x='40'
        y='60'
        width='25'
        height='65'
        rx='15'
        fill='#F2CB05'
        transform='rotate(-45 74 94)'
      />
    </svg>
  );
};

export default InnovarteIcon;
