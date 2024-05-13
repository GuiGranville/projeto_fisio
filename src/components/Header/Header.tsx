import "./styleHeader.scss"
import logo from '../../assets/Header/KyoLogo.png'

export function Header(){

    return(
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-pesquisa">
                <input type="text" placeholder="Pesquisar Paciente"/>
            </div>
            <div className="header-perfil">
                <p>Kiomara</p>
            </div>
        </div>
    )
}