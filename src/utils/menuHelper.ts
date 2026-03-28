import type { MenuItem, Category } from "../types/menu";

export interface PageContent {
  category: Category;
  items: MenuItem[];
  isFirstOfCategory: boolean;
}

export const paginateMenu = (
  menu: MenuItem[],
  itemsPerPage: number = 4,
): PageContent[] => {
  const categories: Category[] = ["kho", "nuoc", "set", "uong"];
  let allPages: PageContent[] = [];

  categories.forEach((cat) => {
    const catItems = menu.filter((item) => item.category === cat);

    // Chia nhỏ món ăn của category này thành từng mảng con
    for (let i = 0; i < catItems.length; i += itemsPerPage) {
      allPages.push({
        category: cat,
        items: catItems.slice(i, i + itemsPerPage),
        isFirstOfCategory: i === 0, // Dùng để hiển thị tiêu đề danh mục
      });
    }
  });

  return allPages;
};
