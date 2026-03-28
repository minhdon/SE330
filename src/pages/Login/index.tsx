import { useState } from "react";
import { Button } from "../../component/common/button/button";
import { Input } from "../../component/common/input/input";
import HeroBackground from "../../component/layouts/overlay/overlay";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Logic ẩn hiện mật khẩu
 
  const navigate = useNavigate();

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic xử lý đăng nhập ở đây (gọi API...)
    console.log("Submit:", { email, password });
  };

  return (
    <div className={styles.container}>
      <HeroBackground />

      <div className={styles.wrapper}>
        {/* Cột trái: Nội dung giới thiệu */}
        <div className={styles.leftCol}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>
              <img src="/images/whitelogo.png" alt="Logo" />
            </span>
            Artiste
          </div>

          <h1 className={styles.title}>
            Đăng Nhập
            <br />
            Ngay Bây Giờ
          </h1>
          <p className={styles.subtitle}>
            Bạn chưa có tài khoản?{" "}
            <Link to="/register" className={styles.link}>
              Đăng ký ngay
            </Link>
          </p>

          <div className={styles.divider}></div>

          <p className={styles.description}>
            Chào mừng bạn đến với Artiste. Hãy bắt đầu hành trình của bạn tại
            đây.
          </p>

          <Button onClick={() => navigate("/")} className={styles.learnMoreBtn}>
            Trang chủ
          </Button>
        </div>

        {/* Cột phải: Form Đăng nhập */}
        <div className={styles.rightCol}>
          <div className={styles.glassCard}>
            <h2 className={styles.formTitle}>Đăng nhập</h2>

            <form onSubmit={handleSubmit}>
              <Input
                label="Email"
                type="email"
                placeholder={"example@gmail.com"}
                icon={<i className="fa-solid fa-envelope"></i>}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                // Chuyển đổi type để ẩn/hiện text
                type="password"
                placeholder="••••••••••••"
                // Đổi icon và thêm sự kiện Click

                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className={styles.submitWrapper}>
                <Button type="submit" className={styles.submitBtn}>
                  Đăng nhập
                </Button>

                <div className={styles.passwordAction}>
                  <Link to="/changePass">Đổi mật khẩu</Link>
                  <Link to="/forgotPass">Quên mật khẩu</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
