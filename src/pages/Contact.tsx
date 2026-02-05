import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Üst Başlık Bölümü */}
      <section className="contact-hero">
        <div className="container">
          <h1>Bizimle İletişime Geçin</h1>
          <p>Projelerimiz hakkında bilgi almak veya hayalinizdeki evi konuşmak için yanınızdayız.</p>
        </div>
      </section>

      <div className="container contact-wrapper">
        <div className="contact-grid">
          
          {/* Sol Taraf: Koyu Lacivert Bilgi Alanı */}
          <div className="contact-info">
            <h2>İletişim Bilgileri</h2>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Adres</h3>
                <p>19 Mayıs Mahallesi Refik Saydam Caddesi 97. Sokak No:19/A Keçiören/ANKARA</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Telefon</h3>
                <p>+90 (553) 390 68 32</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>E-posta</h3>
                <p>info@dorainsaat.net.tr</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-text">
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00<br/>Cumartesi: 09:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Beyaz Form Alanı */}
          <div className="contact-form-container">
            <h2>Bize Ulaşın</h2>
            <form className="contact-form">
              <div className="form-group">
                <label>Ad Soyad *</label>
                <input type="text" placeholder="Adınız ve Soyadınız" required />
              </div>
              <div className="form-group">
                <label>E-posta *</label>
                <input type="email" placeholder="E-posta adresiniz" required />
              </div>
              <div className="form-group">
                <label>Telefon</label>
                <input type="tel" placeholder="05xx xxx xx xx" />
              </div>
              <div className="form-group">
                <label>Mesajınız *</label>
                <textarea rows={5} placeholder="Size nasıl yardımcı olabiliriz?" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Mesajı Gönder</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact