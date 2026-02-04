import FeaturedDish from "../../shared/component/FeatureDish/FeatureDish";
import styles from "./hero.module.css";

const dishes = [
  {
    id: 1,
    name: "Phở Bát Đá",
    description: "Thịt Bò, Trứng gà, Gia vị thảo mộc",
    price: "50.000 VND",
    image: "/images/pho.jpg", // Lưu ý: Trong React/Vite, đường dẫn bắt đầu từ thư mục public là dấu /
    tag: "Must Try",
  },
  {
    id: 2,
    name: "Mỳ Quảng Gà",
    description: "Gà Thả Vườn, Bánh Tráng, Rau Sống",
    price: "45.000 VND",
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
                Artiste - Nơi tìm lại hương vị nguyên bản
              </h2>

              <div className={styles.quoteWrapper}>
                <p className={styles.quoteText}>
                  “Khi ngôn từ lùi lại, để mâm cơm kể chuyện tình thân. ”
                </p>
                {/* <p className={styles.quoteAuthor}>– Alan D. Wolfelt –</p> */}
              </div>

              <div className={styles.description}>
                <p>
                  Tại đây, chúng tôi tin rằng mỗi món ăn là một bức tâm thư viết
                  bằng hương vị. Khi ngôn từ trở nên không đủ để diễn tả lòng
                  hiếu khách, hãy để những món ngon thuần Việt thay chúng tôi kể
                  câu chuyện về tình thân và lòng trân quý. Cảm ơn bạn đã lựa
                  chọn dừng chân để cùng chúng tôi giữ lửa cho những giá trị
                  truyền thống.
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
