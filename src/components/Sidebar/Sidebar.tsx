import "./styleSidebar.scss"
import { IoIosExit } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function Sidebar() {

    const [sideBarOpen, setSideBarOpen] = useState(false)
    const navigate = useNavigate()

    function navigation(route: string) {
        setSideBarOpen(false)
        navigate(route)
    }

    function exit(){
        navigate("/login")
        localStorage.clear()
    }
    return (
        <>
            {sideBarOpen && <SidebarMenu sideBarStatus={sideBarOpen} setSideBarStatus={setSideBarOpen} />}
            {!sideBarOpen && (
                <div className="sidebar">

                    <div className="sidebar-icons">
                        <div onClick={() => setSideBarOpen(!sideBarOpen)}><GiHamburgerMenu color="#FFFFFF" style={{ width: "90%", height: "90%" }} /></div>
                        <div onClick={() => navigation("/agendamento")}><FaCalendar color="#FFFFFF" style={{ width: "60%", height: "60%" }} /></div>
                        <div onClick={() => navigation("/pacientes")}><MdGroup color="#FFFFFF" style={{ width: "70%", height: "70%" }} /></div>
                        <div onClick={() => navigation("/profissionais")}><FaPeopleGroup color="#FFFFFF" style={{ width: "70%", height: "70%" }}/></div>
                        <div onClick={exit}><IoIosExit color="#FFFFFF" style={{ width: "70%", height: "70%" }}/></div>
                    </div>
                </div>
            )}
        </>
    )
}

interface SidebarMenuProps {
    sideBarStatus: boolean
    setSideBarStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export function SidebarMenu({sideBarStatus, setSideBarStatus}: SidebarMenuProps) {

    const Title = styled.p<{$small?: boolean}>`
      color: #ffffff;
      font-size: ${props => props.$small ? "0.8rem" : "0.9rem"};
    `;
const navigate = useNavigate()

    function navigation(route: string) {
        setSideBarStatus(false)
        navigate(route)
    }
    return (
        <div className="sidebar-menu">
                <div className="sidebar-icons">
                        <div onClick={() => setSideBarStatus(!sideBarStatus)}><GiHamburgerMenu color="#FFFFFF" style={{ width: "30px", height: "30px" }} /> <Title>MENU</Title></div>
                        <div onClick={() => navigation("/agendamento")}><FaCalendar color="#FFFFFF" style={{ width: "25px", height: "25px" }} /><Title>AGENDAMENTOS</Title></div>
                        <div onClick={() => navigation("/pacientes")}><MdGroup color="#FFFFFF" style={{ width: "30px", height: "30px" }} /><Title>PACIENTES</Title></div>
                        <div onClick={() => navigation("/profissionais")}><FaPeopleGroup color="#FFFFFF" style={{ width: "30px", height: "30px" }} /><Title>PROFISSIONAIS</Title></div>
                </div>
        </div>
    )
}