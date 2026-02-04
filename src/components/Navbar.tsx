import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      {/* Container genişliğini CSS'den %100 yapacağız */}
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          <div className="logo-img">
            <Logo />
          </div>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="/projeler" className={location.pathname === '/projeler' ? 'active' : ''}>
              Projelerimiz
            </Link>
          </li>
          <li>
            <Link to="/hakkimizda" className={location.pathname === '/hakkimizda' ? 'active' : ''}>
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link to="/iletisim" className={location.pathname === '/iletisim' ? 'active' : ''}>
              İletişim
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar