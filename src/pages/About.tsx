import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Üst Kısım */}
      <section className="about-hero">
        <div className="container">
          <h1>Hakkımızda</h1>
          <p>Dora İnşaat: 30 Yıllık Güven ve Estetik Yolculuğu</p>
        </div>
      </section>

      {/* Hikayemiz Bölümü (Geniş Resimli Alan) */}
      <section className="about-intro py-100">
        <div className="container intro-grid">
          <div className="intro-content">
            <h2 className="section-title">Dora İnşaat</h2>
            <p>
              30 yıllık tecrübemizle kaliteyi standart haline getiriyoruz. 
              Titiz mühendislik ve modern mimariyi birleştirerek hayallerinizi 
              sağlam temellere oturtuyoruz.
            </p>
            <p>
              Ankara'nın yükselen değeri olarak, her projemizde konforu ve 
              dayanıklılığı ön planda tutuyoruz. Sadece bina değil, huzurla 
              yaşayacağınız yuvalar inşa ediyoruz.
            </p>
          </div>
          <div className="intro-image-wrapper">
            {/* Beğendiğin geniş villa resmi burada */}
            <img src="/images/VILLA.jpeg" alt="Dora İnşaat Prestij Projesi" />
          </div>
        </div>
      </section>

      {/* İstatistikler ve Değerlerimiz */}
      <section className="about-features">
        <div className="container">
          <div className="stats-banner">
            <div className="stat-box highlight">
              <h3>30 Yıl</h3>
              <p>Sektörel Deneyim</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Tamamlanan Proje</p>
            </div>
            <div className="stat-box">
              <h3>1000+</h3>
              <p>Mutlu Müşteri</p>
            </div>
            <div className="stat-box">
              <h3>%100</h3>
              <p>Güven ve Kalite</p>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <span className="v-icon">💎</span>
              <h3>Kalite</h3>
              <p>En yüksek standartlarda malzeme ve işçilik.</p>
            </div>
            <div className="value-card">
              <span className="v-icon">🛡️</span>
              <h3>Güvenilirlik</h3>
              <p>Söz verdiğimiz tarihte, eksiksiz teslimat.</p>
            </div>
            <div className="value-card">
              <span className="v-icon">🤝</span>
              <h3>Müşteri Odaklılık</h3>
              <p>Satış öncesi ve sonrası her an yanınızdayız.</p>
            </div>
            <div className="value-card">
              <span className="v-icon">💡</span>
              <h3>İnovasyon</h3>
              <p>Modern teknoloji ve yenilikçi çözümler.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About