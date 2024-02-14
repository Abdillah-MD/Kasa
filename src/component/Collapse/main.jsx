// import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import '../../style/component/collapse.css'

function Collapse({ title, description, marge }) {
    const [IsVisible, setIsVisible] = useState(false)

    function handleClick() {
        setIsVisible(!IsVisible)
    }

    return (
        <dl className={marge}>
            {
                <dt
                    onClick={handleClick}
                    className={IsVisible ? 'visible' : 'noVisible'}
                >
                    {title} <i className="fa-solid fa-chevron-up"></i>
                </dt>
            }
            {IsVisible && (
                <dd
                    className={
                        IsVisible
                            ? 'visible_Description'
                            : 'noVisible_Description'
                    }
                >
                    {Array.isArray(description)
                        ? description.map((element, i) => (
                              <p key={i}>{element}</p>
                          ))
                        : description}
                </dd>
            )}
        </dl>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    IsVisible: PropTypes.bool,
    marge: PropTypes.string,
}

export default Collapse
