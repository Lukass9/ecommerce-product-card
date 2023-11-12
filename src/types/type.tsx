export type Cart = {
  items: Item[];
  total: number;
};

export type Item = {
  id: string;
  name: string;
  img: Images;
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
  images: Images[];
  count: number;
};
export type Images = {
  id: number;
  img: string;
  thumb: string;
};
