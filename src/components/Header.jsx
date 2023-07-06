import '../components/Header.css'

import logo from '../assets/micLogo.jpg'

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Mic Logo" />
    </header>
  )
}
