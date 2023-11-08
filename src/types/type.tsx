export type Cart = {
  items: Item[];
  total: number;
};

export type Item = {
  name: string;
  img: string;
  price: number;
  quantity: number;
};
export type Product = {
  id: number;
  name: string;
  title: String;
  description: string;
  price: number;
  discountPrice: number;
  discount: number;
  images: string[];
  count: number;
};
