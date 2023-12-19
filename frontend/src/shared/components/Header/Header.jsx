import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderText } from "../HeaderText/HeaderText";
import {Burger} from "../Burger/Burger";
import './Header.scss';

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);
    const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem('authorization') === '1');

    async function handleInstructionClick() {
        navigate("/instruction");
        setCurrentPage("/instruction");
    }

    async function handleDesignClick() {
        navigate("/design");
        setCurrentPage("/design");
    }

    async function handleAboutUsClick() {
        navigate("/aboutus");
        setCurrentPage("/aboutus");
    }

    async function handleProfileClick() {
        navigate("/profile");
        setCurrentPage("/profile");
    }

    async function handleLoginClick() {
        navigate("/login");
        setCurrentPage("/login");
    }

    async function handleMainClick() {
        navigate("/main");
        setCurrentPage("/main");
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container__logo">
                    <HeaderText word="Intra" style="intraStyle" onClick={handleMainClick}></HeaderText>
                </div>
                <div className="header__container__navigation">
                    <HeaderText word="Designs"  onClick={handleDesignClick}
                     style={currentPage === "/design" ? "selectedStyle" : ""}/>
                    <HeaderText word="Instruction" onClick={handleInstructionClick}
                        style={currentPage === "/instruction" ? "selectedStyle" : ""}/>
                    <HeaderText word="About Us" onClick={handleAboutUsClick}
                        style={currentPage === "/aboutus" ? "selectedStyle" : ""}/>
                        {/* <HeaderText word="Profile" onClick={handleProfileClick}
                        style={currentPage === "/profile" ? "selectedStyle" : ""}/> */}
                         <HeaderText word={isAuthorized ? "Profile" : "Log In"} 
                    onClick={isAuthorized ? handleProfileClick : handleLoginClick}
                        style={currentPage === (isAuthorized ? "/profile" : "/login") ? "selectedStyle" : ""}
                        dopStyle="logIn"
                    />
                    {/* <HeaderText word="Log In" onClick={handleLoginClick}
                        style={currentPage === "/login" ? "selectedStyle" : ""}/> */}
                </div>
                <Burger items={[{ text: 'Designs', link: '/design' },{ text: 'Instruction', link: '/instruction' },{ text: 'About Us', link: '/aboutus' }, { text: isAuthorized ? 'Profile' : 'Log In', link: isAuthorized ? '/profile' : '/login' }, ]}></Burger>
                
            </div>
        </header>
    );
}




// export function Header() {
//     const navigate = useNavigate();

//     async function handleInstructionClick() {
//         navigate("/instruction");
//     }


//     async function handleAboutUsClick() {
//         navigate("/aboutus");
//     }

//     async function handleMainClick() {
//         navigate("/main");
//     }

//     return (
        
//         <header className="header">
//             <div className="header__container">
//                 <div className="header__container__logo">
//                     <HeaderText word="Intra" style="intraStyle" onClick={handleMainClick}></HeaderText>
//                 </div>
//                 <div className="header__container__navigation">
//                     <div className="header__container__navigation__designs">Designs</div>
//                     <HeaderText word="Instruction" onClick={handleInstructionClick}></HeaderText>
//                     <HeaderText word="About Us" onClick={handleAboutUsClick}></HeaderText>
//                     <div className="header__container__navigation__logIn">Log In</div>
//                 </div>
//             </div>
//         </header>

//     )
// }