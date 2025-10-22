import { SinglePricingBenefitInterface } from '@/Interfaces';

export const cashPricingBenefits: SinglePricingBenefitInterface[] = [
  { name: '10% de descuento', isIncluded: true },
  { name: '2 Cartillas por Alumno', isIncluded: false },
  { name: 'Derecho a repetir los simulacros', isIncluded: true },
  { name: '3 simulacros', isIncluded: true },
  { name: 'Almuerzo durante el simulacro', isIncluded: false },
  { name: 'Café en las clases', isIncluded: true },
  { name: 'Asesorias personalizadas', isIncluded: true },
  { name: 'Modalidad Virtual', isIncluded: true },
  { name: 'Modalidad Presencial', isIncluded: true },
  { name: 'Pago Electrónico (PSE)', isIncluded: true }
];

export const CreditPricingBenefits: SinglePricingBenefitInterface[] = [
  { name: '10% de descuento', isIncluded: true },
  { name: '2 Cartillas por Alumno', isIncluded: false },
  { name: 'Derecho a repetir los simulacros', isIncluded: true },
  { name: '3 simulacros', isIncluded: false },
  { name: 'Almuerzo durante el simulacro', isIncluded: true },
  { name: 'Café en las clases', isIncluded: false },
  { name: 'Asesorias personalizadas', isIncluded: true },
  { name: 'Modalidad Virtual', isIncluded: false },
  { name: 'Modalidad Presencial', isIncluded: false },
  { name: 'Pago Electrónico (PSE)', isIncluded: true }
];
