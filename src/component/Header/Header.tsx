import styles from "./Header.module.css";

const ChevronIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Phần Menu Bên Trái */}
        <nav className={styles.navGroup}>
          <div className={styles.navItem}>
            Trang chủ{" "}
            <span className={styles.icon}>
              <ChevronIcon />
            </span>
          </div>
          {/* <div className={styles.navItem}>
            CONCEPT{" "}
            <span className={styles.icon}>
              <ChevronIcon />
            </span>
          </div> */}
          <div className={styles.navItem}>
            Thực đơn{" "}
            <span className={styles.icon}>
              <ChevronIcon />
            </span>
          </div>
        </nav>

        {/* Logo ở giữa */}
        <div className={styles.logoWrapper}>
          {/* Bạn thay thẻ này bằng thẻ <img> nếu có file ảnh logo */}
          <div className={styles.logoPlaceholder}>
            <div className={styles.logoInner}>
              <img
                src="public/images/Brown Simple Circle Restaurant Logo.png"
                alt=""
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>

        {/* Phần Menu Bên Phải */}
        <nav className={styles.navGroup}>
          {/* <div className={styles.navItem}>GALLERY</div> */}
          <div className={styles.navItem}>Liên hệ</div>
          <div className={styles.navItem}>Đặt bàn</div>
        </nav>

        {/* Phần Hành Động (Lang + Button) */}
      </div>
    </header>
  );
}
export default Header;
