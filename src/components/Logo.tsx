const Logo = () => {
  return (
    <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(10, 5)">
        <path d="M0 0H35C55 0 70 15 70 35C70 55 55 70 35 70H0V0Z" fill="#B8860B"/>
        <path d="M15 55V25L25 15V55H15Z" fill="white"/>
        <path d="M30 55V10L45 10V55H30Z" fill="white"/>
        <path d="M50 55V20L60 25V55H50Z" fill="white" opacity="0.8"/>
      </g>

      <g transform="translate(90, 28)">
        <text fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#1A2E44" letterSpacing="1">DORA İNŞAAT</text>
        <text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill="#B8860B" letterSpacing="2.5">KALİTELİ İNŞAAT HİZMETLERİ</text>
      </g>
    </svg>
  )
}

export default Logo
