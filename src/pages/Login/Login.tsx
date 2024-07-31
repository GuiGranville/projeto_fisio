import "./styleLogin.scss";
import logo from "../../assets/Header/KyoLogo.png"
import { LoginContext, LoginProvider } from "../../context/Login/LoginContext";
import { Input } from "../../components/styleComponents/input";
import { Button } from "../../components/styleComponents/button";
import { useContext } from "react";


function Login() {

    const {auth} = useContext(LoginContext)
    
    async function handleLogin(){
        const email = document.getElementById("email") as HTMLInputElement
        const password = document.getElementById("password") as HTMLInputElement

        await auth(email.value, password.value)
        
    }

    return (
        <div className="login">
            <div className="login-image">
                <img src={logo}/>
            </div>
            <div className="login-background">
                <div className="login-content">
                    <h1 style={{ color: "#ffffff" }}>Login</h1>
                    <div className="login-inputs">
                        <Input style={{ width: "80%" }} type="text" placeholder="Email" id="email"/>
                        <Input style={{ width: "80%" }} type="password" placeholder="Senha" id="password"/>
                    </div>
                    <div className="login-button">
                        <Button onClick={handleLogin} style={{ width: "50%" }}>Entrar</Button>
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