import '../styles/Header.css'
import logo from '../assets/images/logo.svg'

function Header() {
    
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt=""></img>
            <div className="header__navLink">
                <a href="#">Accueil</a>
                <a href="#">À Propos</a>
            </div>
        </div>
    )
}

export default Header