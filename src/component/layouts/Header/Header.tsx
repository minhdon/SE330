import styles from "./Header.module.css";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Phần Menu Bên Trái */}
        <nav className={styles.navGroup}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoPlaceholder}>
              <div className={styles.logoInner}>
                <img
                  src="images/Brown Simple Circle Restaurant Logo.png"
                  alt=""
                  className={styles.logoImage}
                />
              </div>
            </div>
          </div>
          {/* <div className={styles.navItems}>ARTISTE Restaurant</div> */}
        </nav>

        {/* Logo ở giữa */}

        {/* Phần Menu Bên Phải */}
        <nav className={styles.navGroup}>
          <Link to="/" className={styles.navItem}>
            Trang chủ{" "}
          </Link>

          <Link to="/menu" className={styles.navItem}>
            Thực đơn{" "}
          </Link>
          {/* <div className={styles.navItem}>GALLERY</div> */}
          <Link to="/contact" className={styles.navItem}>
            Liên hệ
          </Link>
          <Link to="/booking" className={styles.navItem}>
            Đặt bàn
          </Link>
        </nav>
        <div className={styles.line}></div>

        {/* Phần Hành Động (Lang + Button) */}

        <div className={styles.btn}>
          {" "}
          <button
            className={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Đăng nhập{" "}
          </button>
          <button
            className={styles.registerBtn}
            onClick={() => navigate("/register")}
          >
            Đăng ký{" "}
          </button>
        </div>
      </div>
      <div className={styles.bottomLine}></div>
    </header>
  );
}
export default Header;
