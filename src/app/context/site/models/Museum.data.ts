import { Image } from "./Image.data";

export interface Museum {
  id: number;
  imageList: Image[];
  name: string;
  rate: number;
  description: string;
  price: string;
  phone: string;
  site: string;
}
