import { useParams, useNavigate } from 'react-router-dom'
import { locationList } from '../../Data/LocationList'
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
        const fetchData = async () => {
            try {
                const foundAppartement = locationList.find(
                    (location) => location.id === id
                )
                if (foundAppartement) {
                    setAppartement(foundAppartement)
                } else {
                    navigation('/page-introuvable')
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des détails de l'appartement",
                    error
                )
                // En cas d'erreur, redirigez l'utilisateur vers la page d'erreur 404
                navigation('/page-introuvable')
            }
        }
        fetchData()

        // console.log(appartement.equipments)
        // console.log(appartement.tags)
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
