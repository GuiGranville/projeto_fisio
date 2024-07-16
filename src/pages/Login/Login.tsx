import "./styleLogin.scss";
import logo from "../../assets/Header/KyoLogo.png"
import { LoginProvider } from "../../context/Login/LoginContext";
import { Input } from "../../components/styleComponents/input";
import { Button } from "../../components/styleComponents/button";


function Login() {

    return (
        <div className="login">
            <div className="login-image">
                <img src={logo}/>
            </div>
            <div className="login-background">
                <div className="login-content">
                    <h1 style={{ color: "#ffffff" }}>Login</h1>
                    <div className="login-inputs">
                        <Input type="text" placeholder="Email" />
                        <Input type="text" placeholder="Senha" />
                    </div>
                    <div className="login-button">
                        <Button style={{ width: "50%" }}>Entrar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function LoginWrapper() {

    return (
        <LoginProvider>
            <Login />
        </LoginProvider>
    )
}