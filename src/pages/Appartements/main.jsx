import { useParams, useNavigate } from 'react-router-dom'
import { locationList } from '../../Data/LocationList'
import { useEffect, useState } from 'react'

function Appartements() {
    // Récupérer l'id dans le lien
    const { id } = useParams()
    const navigation = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const [appartement, setAppartement] = useState(null)

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
        console.log(appartement)
    }, [id, navigation, appartement])

    return (
        <div>
            <h1>Appartements</h1>
            {/* {console.log(appartement)} */}
        </div>
    )
}

export default Appartements
