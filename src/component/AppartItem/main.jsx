import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.figure`
    border-radius: 15px;
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.95);
    &:hover {
        cursor: pointer;
        filter: brightness(1);
    }
`
const ImgCard = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const TextCard = styled.h2`
    position: absolute;
    color: white;
    font-weight: bold;
    left: 15px;
    bottom: 15px;
    font-size: 1.1em;
    padding: 0 10px;
    text-shadow: 2px 2px 10px black;
`

function AppartItem({ title, cover }) {
    return (
        <Card>
            <ImgCard src={cover} alt={`${title} cover`} />
            <TextCard>{title}</TextCard>
        </Card>
    )
}

AppartItem.propTypes = {
    title: PropTypes.string.isRequired, // Assure que 'title' est une chaîne et qu'il est requis
    cover: PropTypes.string.isRequired, // Assure que 'cover' est une chaîne et qu'il est requis
}

export default AppartItem
