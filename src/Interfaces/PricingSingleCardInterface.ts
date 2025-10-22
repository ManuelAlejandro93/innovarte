import { ClassNameInterface } from '@/Interfaces';

export interface PricingSingleCardInterface extends ClassNameInterface {
  paymentType?: string;
  finalPrice?: number;
  benefits?: [
    {
      name: String;
      isIncluded: boolean;
    }
  ];
}
