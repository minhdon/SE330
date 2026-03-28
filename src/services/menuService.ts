// import type { MenuItem } from "../types/menu";

// const API_URL = "https://api.your-restaurant.com/v1";

// export const fetchMenuItems = async (): Promise<MenuItem[]> => {
//   try {
//     const response = await fetch(`${API_URL}/menu`);
//     if (!response.ok) throw new Error("Không thể lấy dữ liệu thực đơn");
//     return await response.json();
//   } catch (error) {
//     console.error("Menu Service Error:", error);

//     return [];
//   }

//Fake data

import type { MenuItem } from "../types/menu";
import { MOCK_MENU_DATA } from "./mockMenu";

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  // Giả lập gọi API với độ trễ 1 giây
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_MENU_DATA);
    }, 1000);
  });
};
