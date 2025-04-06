export type CheckboxState = boolean;

export type CheckboxChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type FormState = {
  name: string
  email: string
  phone: string
  message: string
  adress: string
};
export interface FormOrdersProps {
  setSelectedDelivery: (deliveryType: 'delivery' | 'pickup') => void;
  clearCart: () => void;
}
