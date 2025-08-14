interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  isAvailable: string;
}

interface ICart {
  id?: string;
  menuId?: string;
  menuItem?: IMenu;
  quantity: number;
  notes?: string;
  name?: string;
}

interface IOrder {
  id: string;
  customer_name: string;
  table_number: number;
  cart: ICart[];
  status: "PENDING" | "PROCESSING" | "COMPLETE";
  total: number;
}

export type { IOrder, ICart, IMenu };
