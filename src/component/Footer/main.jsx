import styled from 'styled-components'
import WhiteLogo from '../../assets/kasa_white.svg'

const SectionFooter = styled.footer`
    background: black;
    color: white;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        @media (max-width: 768px) {
            width: 20% !important;
        }
    }
`

function Footer() {
    return (
        <SectionFooter>
            <img src={WhiteLogo} style={{ width: '10%' }} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </SectionFooter>
    )
}

export default Footer
