import { useParams, useNavigate } from 'react-router-dom'
import { locationList } from '../../Data/LocationList'
import { useEffect, useState } from 'react'
import SlideShow from '../../component/SlideShow/main'
import InfoAppart from '../../component/InfoAppart/main'
import Collapse from '../../component/Collapse/main'
import redStar from '../../assets/redStar.svg'
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

        // console.log(appartement.pictures[4])
    }, [id, navigation, appartement])

    return (
        <div>
            {appartement && <SlideShow pictures={appartement.pictures[1]} />}
            {appartement && (
                <InfoAppart
                    title={appartement.title}
                    location={appartement.location}
                    tag={appartement.tag}
                    name={
                        <ul
                            style={{
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                                color: '#ff6060',
                                fontWeight: 'bold',
                            }}
                        >
                            {appartement.host.name
                                .split(/\s+/)
                                .map((part, index) => (
                                    <li key={index}>{part}</li>
                                ))}
                        </ul>
                    }
                    picture={appartement.host.picture}
                    rating={<img src={redStar} alt="étoile" />} // Trouver la solution étoile rouge et gris
                />
            )}
            <div className="appartements_collapse">
                {appartement && (
                    <Collapse
                        title="Description"
                        description={appartement.description}
                    />
                )}
                {appartement && (
                    <Collapse
                        title="Équipements"
                        description={appartement.equipments}
                    />
                )}
            </div>
        </div>
    )
}

export default Appartements
