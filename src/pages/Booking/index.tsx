import React, { useState } from "react";
import { Button } from "../../component/common/button/button";
import { Input } from "../../component/common/input/input";
import HeroBackground from "../../component/layouts/overlay/overlay";
import styles from "./index.module.css";
import Header from "../../component/layouts/Header/Header";
import Footer from "../../component/layouts/Footer/footer";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Đặt bàn thành công! Chúng tôi sẽ gọi xác nhận trong ít phút.");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <HeroBackground />

        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Đặt Bàn</h1>
            <p className={styles.subtitle}>
              Trải nghiệm không gian ẩm thực tinh tế tại <span>Artiste</span>
            </p>

            <div className={styles.glassCard}>
              <form onSubmit={handleBooking} className={styles.bookingForm}>
                {/* Row 1: Thông tin cá nhân */}
                <div className={styles.row}>
                  <Input
                    label="Họ và Tên"
                    placeholder="Nguyễn Văn A"
                    required
                  />
                  <Input
                    label="Số điện thoại"
                    type="tel"
                    placeholder="0901 234 567"
                    required
                  />
                </div>

                {/* Row 2: Thời gian và số lượng */}
                <div className={styles.row}>
                  <Input label="Ngày đặt" type="date" required />
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Giờ đến</label>
                    <select className={styles.select} required>
                      <option value="">Chọn giờ</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Số khách và Khu vực */}
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Số lượng khách</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className={styles.numberInput}
                      defaultValue="2"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Khu vực ngồi</label>
                    <select className={styles.select}>
                      <option value="standard">Sảnh chung</option>
                      <option value="window">Cạnh cửa sổ</option>
                      <option value="vip">Phòng VIP (Có phí)</option>
                      <option value="outdoor">Ngoài trời</option>
                    </select>
                  </div>
                </div>

                {/* Lời nhắn/Dị ứng */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Yêu cầu đặc biệt</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Ví dụ: Trang trí sinh nhật, dị ứng hải sản..."
                    rows={3}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Đang xử lý..." : "Xác nhận đặt bàn"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
