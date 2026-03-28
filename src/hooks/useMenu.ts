import { useState, useEffect } from "react";
import type { MenuItem } from "../types/menu";
import { fetchMenuItems } from "../services/menuService";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchMenuItems()
      .then((data) => {
        if (isMounted) {
          setMenu(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { menu, loading, error };
};
