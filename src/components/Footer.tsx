import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Dora İnşaat</h3>
          <p>DORA İNŞAAT LİMİTED ŞİRKETİ</p>
          <p>Kaliteli konutlar, güvenilir inşaat hizmeti</p>
        </div>
        <div className="footer-section">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/projeler">Projelerimiz</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>İletişim</h4>
          <p>19 Mayıs Mahallesi Refik Saydam Caddesi<br />97.Sokak No:19/A Keçiören/ANKARA</p>
          <p>Email: info@dorainsaat.com</p>
          <p>Telefon: +90 (553) 390 68 32</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dora İnşaat. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
