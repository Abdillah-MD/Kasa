import { Link, useNavigate } from 'react-router-dom'
import ImageBcgMer from '../../assets/lamer_kasa.png'
import styled from 'styled-components'
// import { locationList } from '../../Data/LocationList' <== Premier fichier utilisé pour chercher les données avant utilisation de useEffect
import AppartItem from '../../component/AppartItem/main'
import Banner from '../../component/Banner/main'
import '../../style/component/banner.css'
import { useEffect, useState } from 'react'

const AppartList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
    gap: 40px;
    margin: 50px 0;
    padding: 40px;
    background: #f6f6f6;
    border-radius: 25px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20px 0;
        background: white;
        gap: 20px;
    }
    div {
        @media (max-width: 768px) {
            height: 280px !important;
        }
    }
`

function Home() {
    const navigate = useNavigate()

    // Redirige vers la page /Kasa si le path est vide
    useEffect(() => {
        // Redirige vers la page /Kasa si le chemin est la page d'accueil
        if (window.location.pathname === '/') {
            navigate('/Kasa')
        }
    }, [navigate])

    const [locationList, setlocationList] = useState([])

    // Utiliser useEffect pour faire appelle à fetch et répérer les données logements
    useEffect(() => {
        // Récupérer données
        fetch('data/logements.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setlocationList(data)
            })
    }, [])

    return (
        <section>
            <Banner
                brightness={`bannerBrightness`}
                cheminImage={ImageBcgMer}
                h1={'Chez vous, partout et ailleurs'}
            />
            <AppartList>
                {locationList.map(({ id, title, cover }) => (
                    <Link
                        to={`/appartements/${id}`}
                        key={id}
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            height: '320px',
                        }}
                    >
                        <AppartItem cover={cover} title={title} />
                    </Link>
                ))}
            </AppartList>
        </section>
    )
}

export default Home
