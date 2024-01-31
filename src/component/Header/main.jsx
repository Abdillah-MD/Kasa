import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/Kasa.svg'
import styled from 'styled-components'

const SecHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 80px;
    align-items: center;
`

const Nav = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-around;
    color: black;
`
const NavLink = styled(Link)`
    color: black;
    &:hover {
        color: #ff6060;
    }
`
const Logo = styled.img`
    width: 10%;
`

function Header() {
    return (
        <SecHeader>
            <Logo src={KasaLogo} alt="Kasa" />
            <Nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">À propos</NavLink>
            </Nav>
        </SecHeader>
    )
}

export default Header
