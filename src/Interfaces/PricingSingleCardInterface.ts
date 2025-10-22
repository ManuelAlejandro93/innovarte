import {
  ClassNameInterface,
  SinglePricingBenefitInterface
} from '@/Interfaces';

export interface PricingSingleCardInterface extends ClassNameInterface {
  paymentType?: string;
  finalPrice?: number;
  benefits?: SinglePricingBenefitInterface[];
}
