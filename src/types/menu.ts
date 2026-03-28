export type Category = "kho" | "nuoc" | "set" | "uong";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
}
