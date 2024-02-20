import { NavLink } from 'react-router-dom'
import KasaLogo from '../../assets/Kasa.svg'
import styled from 'styled-components'
import '../../style/component/header.css'

const SecHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 80px;
    align-items: center;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

const Nav = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-around;
    color: black;
`

const Logo = styled.img`
    width: 10%;
    @media (max-width: 768px) {
        width: 100px;
    }
`

function Header() {
    return (
        <SecHeader>
            <Logo src={KasaLogo} alt="Kasa" />
            <Nav className="nav">
                <NavLink
                    className={(navData) =>
                        navData.isActive ? 'active header_link' : 'header_link'
                    }
                    to="/Kasa/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? 'active header_link' : 'header_link'
                    }
                    to="/Kasa/about"
                >
                    À propos
                </NavLink>
            </Nav>
        </SecHeader>
    )
}

export default Header
