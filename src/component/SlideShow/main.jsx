import PropTypes from 'prop-types'
import '../../style/component/slideShow.css'
import { useState } from 'react'

function SlideShow({ pictures, title }) {
    let [pic, setPic] = useState(0)

    // Permet d'animer le click droit
    function clickDroit() {
        setPic(pic + 1)
        if (pic >= pictures.length - 1) {
            setPic((pic = 0))
        }
    }

    // Permet d'animer le click gauche
    function clickGauche() {
        setPic(pic - 1)
        if (pic === 0) {
            setPic(pictures.length - 1)
        }
    }

    return (
        <div className="slideShow">
            <img className="slideShow_img" src={pictures[pic]} alt={title} />
            {pictures.length === 1 ? null : (
                <>
                    <i
                        className="fa-solid fa-chevron-right"
                        onClick={clickDroit}
                    ></i>
                    <i
                        className="fa-solid fa-chevron-left"
                        onClick={clickGauche}
                    ></i>
                    <p className="slideShow_nb">{`${pic + 1}/${
                        pictures.length
                    }`}</p>
                </>
            )}
        </div>
    )
}

SlideShow.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string,
}

export default SlideShow
