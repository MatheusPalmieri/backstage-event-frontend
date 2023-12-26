export interface Quantity {
  total: number;
  available: number;
  pending: number;
  sold: number;
  canceled: number;
  reversed: number;
  minPerOrder: number;
  maxPerOrder: number;
}

export interface Lot {
  _id: string;
  name: string;
  description: string;
  price: number;
  grossPrice: number;
  installments: number;
  installmentsPrice: number;
  tax: number;
  quantity: Quantity;
}

export interface TicketType {
  _id: string;
  name: string;
  description: string;
  lots: Lot[];
}
