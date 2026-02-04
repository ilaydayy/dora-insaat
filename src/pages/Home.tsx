import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Bölümü */}
      <section className="hero" style={{ backgroundImage: `url('/images/COMPANY.jpeg')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Hayalinizdeki Evi Gerçeğe Dönüştürüyoruz</h1>
          <p>Dora İnşaat ile kalite ve estetiğin buluştuğu yaşam alanlarına adım atın.</p>
          <div className="hero-buttons">
            <Link to="/projeler" className="btn btn-primary">Projelerimizi İnceleyin</Link>
            <Link to="/iletisim" className="btn btn-secondary">İletişime Geçin</Link>
          </div>
        </div>
      </section>

      {/* Neden Dora İnşaat Bölümü */}
      <section className="features-section">
        <div className="container-fluid"> {/* Daha geniş bir kapsayıcı kullandık */}
          <h2 className="section-header">Neden Dora İnşaat?</h2>
          <div className="features-grid">
            
            <div className="feature-card">
              <div className="feature-img-container">
                <img src="/images/vizyoner-tasarim.jpg.png" alt="Vizyoner Tasarım" />
              </div>
              <div className="feature-card-body">
                <div className="feature-icon-wrapper">🏠</div>
                <h3>Vizyoner Tasarım ve Mimari</h3>
                <p>Modern mimariyi konforla birleştirerek projelerimize yansıtıyoruz.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-img-container">
                <img src="/images/sarsilmaz-guven.jpg.png" alt="Sarsılmaz Güven" />
              </div>
              <div className="feature-card-body">
                <div className="feature-icon-wrapper">🛡️</div>
                <h3>Sarsılmaz Güven</h3>
                <p>En güncel yönetmeliklere uygun, titiz mühendislik çözümleri sunuyoruz.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-img-container">
                <img src="/images/zamaninda-teslimat.jpg.png" alt="Zamanında Teslimat" />
              </div>
              <div className="feature-card-body">
                <div className="feature-icon-wrapper">⏰</div>
                <h3>Zamanında Teslimat</h3>
                <p>Söz verdiğimiz tarihte anahtar teslim hizmet sunuyoruz.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-img-container">
                <img src="/images/seffaf-hizmet.jpg.png" alt="Şeffaf Hizmet" />
              </div>
              <div className="feature-card-body">
                <div className="feature-icon-wrapper">🤝</div>
                <h3>Şeffaf Hizmet</h3>
                <p>Her aşamada sizi bilgilendiriyor, satış sonrası yanınızda oluyoruz.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home