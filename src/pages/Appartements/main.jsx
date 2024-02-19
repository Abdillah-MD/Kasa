import { useParams, useNavigate } from 'react-router-dom'
// import { locationList } from '../../Data/LocationList'
import { useEffect, useState } from 'react'
import SlideShow from '../../component/SlideShow/main'
import InfoAppart from '../../component/InfoAppart/main'
import Collapse from '../../component/Collapse/main'

import '../../style/pages/appartements.css'
// import grayStar from '../../assets/grayStar.svg'

function Appartements() {
    // Récupérer l'id dans le lien
    const { id } = useParams()
    const navigation = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const [appartement, setAppartement] = useState(null)
    // let photoAppart

    useEffect(() => {
        fetch('../data/logements.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json()
            })
            .then((locationList) => {
                const foundAppartement = locationList.find(
                    (location) => location.id === id
                )
                if (foundAppartement) {
                    setAppartement(foundAppartement)
                } else {
                    navigation('/page-introuvable')
                }
            })
    }, [id, navigation, appartement])

    return (
        appartement && (
            <>
                <SlideShow pictures={appartement.pictures} />
                <InfoAppart
                    title={appartement.title}
                    location={appartement.location}
                    tags={appartement.tags}
                    name={appartement.host.name}
                    picture={appartement.host.picture}
                    rating={appartement.rating * 1} // Trouver la solution étoile rouge et gris
                />
                <div className="appartements_collapse">
                    <Collapse
                        title="Description"
                        description={appartement.description}
                    />
                    <Collapse
                        title="Équipements"
                        description={appartement.equipments}
                    />
                </div>
            </>
        )
    )
}

export default Appartements
