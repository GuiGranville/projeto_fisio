import "./styleSidebar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";

export function Sidebar() {

    const [sideBarOpen, setSideBarOpen] = useState(false)
    return (
        <>
            {sideBarOpen && <SidebarMenu sideBarStatus={sideBarOpen} setSideBarStatus={setSideBarOpen} />}
            {!sideBarOpen && (
                <div className="sidebar">

                    <div className="sidebar-icons">
                        <div onClick={() => setSideBarOpen(!sideBarOpen)}><GiHamburgerMenu color="#FFFFFF" style={{ width: "90%", height: "90%" }} /></div>
                        <div><FaCalendar color="#FFFFFF" style={{ width: "60%", height: "60%" }} /></div>
                        <div><MdGroup color="#FFFFFF" style={{ width: "70%", height: "70%" }} /></div>
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

    return (
        <div className="sidebar-menu">
             <div className="sidebar-icons">
                        <div onClick={() => setSideBarStatus(!sideBarStatus)}><GiHamburgerMenu color="#FFFFFF" style={{ width: "30px", height: "30px" }} /> <Title>MENU</Title></div>
                        <div><FaCalendar color="#FFFFFF" style={{ width: "25px", height: "25px" }} /><Title $small>AGENDAMENTOS</Title></div>
                        <div><MdGroup color="#FFFFFF" style={{ width: "30px", height: "30px" }} /><Title>PACIENTES</Title></div>
                    </div>
        </div>
    )
}