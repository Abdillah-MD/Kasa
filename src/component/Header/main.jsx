import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/Kasa.svg'
import styled from 'styled-components'

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
    @media (max-width: 768px) {
        width: 50%;
    }
`
const NavLink = styled(Link)`
    color: black;
    &:hover {
        color: #ff6060;
    }
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
            <Nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
            </Nav>
        </SecHeader>
    )
}

export default Header
