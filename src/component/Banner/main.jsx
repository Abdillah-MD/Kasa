// import { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionTitle = styled.div`
    height: 150px;
    border-radius: 25px;
    // background-image: url('');
    background-position: center center;
    background-size: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 80px;
    padding: 0 40px;
    position: relative;
    overflow: hidden;
    font-size: 0.85rem;
    @media (max-width: 1024px) {
        margin: 20px 0;
        font-size: 0.7em;
        height: 130px;
    }
    @media (max-width: 768px) {
        margin: 20px 0;
        font-size: 0.4em;
        height: 130px;
    }
`

function Banner({ children, cheminImage, brightness }) {
    return (
        <SectionTitle
            className={brightness}
            style={{ backgroundImage: `url(${cheminImage})` }}
        >
            <h1 style={{ position: 'absolute', padding: '20px' }}>
                {children}
            </h1>
        </SectionTitle>
    )
}

Banner.propTypes = {
    children: PropTypes.string,
    cheminImage: PropTypes.string.isRequired,
    brightness: PropTypes.string, // Ajout prop pour assombrir le composant
}

export default Banner
