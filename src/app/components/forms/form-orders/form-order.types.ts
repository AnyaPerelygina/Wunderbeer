export type CheckboxState = boolean;

export type CheckboxChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface FormOrdersProps {
  setSelectedDelivery: (deliveryType: 'delivery' | 'pickup') => void;
}
