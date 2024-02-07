import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'

const SlideDown = keyframes`
  from {
    transform: translateY(-100px);
    -webkit-transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
`
const SlideUp = keyframes`
    from {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
    to {
        transform: translateY(-100px);
        -webkit-transform: translateY(-100px);
    }
`

const spin180 = keyframes`
  from {
    transform: rotate(0);
    -webkit-transform: rotate(0);
  }
  to {
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
  }
`

const Dl = styled.dl`
    overflow: hidden;
    position: relative;
`

const Dt = styled.dt`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6060;
    padding: 10px 40px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    z-index: 2;
    @media (max-width: 1024px) {
        padding: 10px 20px;
    }
    i {
        ${({ IsVisible }) =>
            IsVisible &&
            css`
                animation: ${spin180} 0.3s ease-in-out forwards;
                -webkit-animation: ${spin180} 0.3s ease-in-out forwards;
            `}
    }
`

const Dd = styled.dd`
    margin: 0;
    padding: 15px 40px;
    background-color: #f6f6f673;
    border-radius: 0 0 5px 5px;
    z-index: 1;
    display: ${({ IsVisible }) => (IsVisible ? 'block' : 'none')};

    ${({ IsVisible }) =>
        IsVisible
            ? css`
                  animation: ${SlideDown} 0.3s ease-in-out;
              `
            : css`
                  animation: ${SlideUp} 0.3s ease-in-out;
              `}
    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`

function Collapse({ title, description, marge }) {
    const [IsVisible, setIsVisible] = useState(false)

    function handleClick() {
        setIsVisible(!IsVisible)
    }

    return (
        <Dl className={marge}>
            {
                <Dt onClick={handleClick} IsVisible={IsVisible}>
                    {title} <i className="fa-solid fa-chevron-up"></i>
                </Dt>
            }
            {IsVisible && <Dd IsVisible={IsVisible}>{description}</Dd>}
        </Dl>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    IsVisible: PropTypes.bool,
    marge: PropTypes.string,
}

export default Collapse
