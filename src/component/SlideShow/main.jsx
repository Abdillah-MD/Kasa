import PropTypes from 'prop-types'
import '../../style/component/slideShow.css'
import { useState } from 'react'

function SlideShow({ pictures, title }) {
    let [pic, setPic] = useState(0)

    console.log(pic)
    function clickDroit() {
        setPic(pic + 1)
        if (pic >= pictures.length - 1) {
            setPic((pic = 0))
        }
        console.log(pic)
    }

    function clickGauche() {
        setPic(pic - 1)
        if (pic === 0) {
            setPic(pictures.length - 1)
        }
        console.log(pic)
    }

    return (
        <div className="slideShow">
            <img className="slideShow_img" src={pictures[pic]} alt={title} />
            <i className="fa-solid fa-chevron-right" onClick={clickDroit}></i>
            <i className="fa-solid fa-chevron-left" onClick={clickGauche}></i>
        </div>
    )
}

SlideShow.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string,
}

export default SlideShow
