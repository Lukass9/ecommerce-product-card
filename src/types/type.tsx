export type Cart = {
  items: Item[];
  total: number;
};

export type Item = {
  id: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
};
export type Product = {
  id: number;
  name: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  discount: number;
  images: string[];
  count: number;
};
