import FeaturedDish from "../../shared/component/FeatureDish/FeatureDish";
import styles from "./hero.module.css";

const dishes = [
  {
    id: 1,
    name: "Phở Bát Đá",
    description: "Wagyu Beef, Truffle Oil, Handmade Noodle",
    price: "$24.00",
    image: "/images/pho.jpg", // Lưu ý: Trong React/Vite, đường dẫn bắt đầu từ thư mục public là dấu /
    tag: "Must Try",
  },
  {
    id: 2,
    name: "Mỳ Quảng Gà",
    description: "Fresh Spring Rolls, Shrimp, Herbs, Peanut Sauce",
    price: "$12.00",
    image: "public/images/myquang.jpg",
    tag: "Best Seller",
  },
];
function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image Layer */}
      <div className={styles.backgroundImage}></div>

      {/* Dark Overlay Layer (Lớp phủ tối để làm nổi chữ) */}
      <div className={styles.overlay}></div>

      {/* Main Content Container */}
      <div className={styles.container}>
        {/* Thay div thành fieldset */}
        <div className={styles.contentGrid}>
          <div className={styles.leftContent}>
            <fieldset className={styles.borderBox}>
              {/* Thay h1 thành legend để nó tự động nhảy lên viền */}
              <legend className={styles.mainTitle}>Trang chủ</legend>

              <h2 className={styles.subTitle}>
                AUTHENTIC VIETNAMESE RESTAURANT
              </h2>

              <div className={styles.quoteWrapper}>
                <p className={styles.quoteText}>
                  “Food is symbolic of love when words are inadequate.”
                </p>
                <p className={styles.quoteAuthor}>– Alan D. Wolfelt –</p>
              </div>

              <div className={styles.description}>
                <p>
                  Welcome to HOME, where the heart of Vietnam comes alive on
                  your plate. With each dish meticulously crafted to honor the
                  rich culinary heritage of Vietnam, HOME takes you on a
                  gastronomic adventure.
                </p>
              </div>
            </fieldset>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.cardGrid}>
              {dishes.map((dish) => (
                <FeaturedDish
                  key={dish.id} // Bắt buộc phải có key khi dùng map
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  image={dish.image}
                  tag={dish.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
