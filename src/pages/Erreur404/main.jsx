import { Link } from 'react-router-dom'
import Img404 from '../../assets/404_kasa.svg'
import styled from 'styled-components'

const titleErr = "Oups! La page que vous demandez n'existe pas."
const returnHome = "Retourner à la page d'accueil"

const SectionErr = styled.section`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 40px 0;
    h1 {
        font-size: 1.4em;
        color: #ff6060;
        @media (max-width: 768px) {
            padding: 0 40px;
        }
    }
    a:hover {
        color: #ff6060;
    }
`

function Err404() {
    return (
        <SectionErr>
            <img src={Img404} style={{ width: '40%' }} alt="Erreur 404" />
            <h1>{titleErr}</h1>
            <Link
                to="/"
                style={{
                    color: 'black',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                }}
            >
                {returnHome}
            </Link>
        </SectionErr>
    )
}

export default Err404
