import LogoSchool from './../../img/icons/LogoSchool.svg'
import LogoProictis from './../../img/icons/LogoProictis.svg'
import LogoSfedu from './../../img/icons/LogoSfedu.svg'

import './header.css'

function Header() {
    return <header className="header">
        <div className="container">
            <div className="rectangle"> 
                <div className="header_row">
                    <div className="header_logo">
                        
                        <img src = {LogoSfedu} alt = "LogoSfedu"/>
                        <img src = {LogoProictis} alt = "LogoProictis"/>
                        <img src = {LogoSchool} alt = "LogoSchool"/>
                    </div>
                    <nav className="header_nav">
                        <ul>
                            <li><a href="#!">Главная</a></li>
                            <li><a href="#!">Направления</a></li>
                            <li><a href="#!">О школе</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}

export default Header;