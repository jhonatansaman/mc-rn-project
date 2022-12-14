export interface Product {
  description: string;
  url: string;
  price: number;
  name: string;
}

export interface IProductDetails {
  productSelected: Product | null;
}

export type ProductResponse = {
  menus: {
    name: string;
    items: Product[];
  }[];
};
