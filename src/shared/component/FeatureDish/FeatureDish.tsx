import React from "react";
import styles from "./FeatureDish.module.css";

// 1. Định nghĩa kiểu dữ liệu (Interface) cho các món ăn
interface DishProps {
  image: string;
  name: string;
  description: string;
  price: string;
  tag?: string; // Dấu ? nghĩa là có thể có tag hoặc không
}

// 2. Truyền props vào component
const FeaturedDish: React.FC<DishProps> = ({
  image,
  name,
  description,
  price,
  tag,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* Dùng biến image thay cho link cứng */}
        <img src={image} alt={name} className={styles.dishImage} />

        {/* Chỉ hiện Tag nếu có dữ liệu tag được truyền vào */}
        {tag && <div className={styles.tag}>{tag}</div>}
      </div>

      <div className={styles.info}>
        <h3 className={styles.dishName}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className={styles.orderBtn}>+ Order</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDish;
