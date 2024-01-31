// import { Link } from 'react-router-dom'
import ImageBcgMer from '../../assets/lamer_kasa.png'
import styled from 'styled-components'
import { locationList } from '../../Data/LocationList'
import AppartItem from '../../component/AppartItem/main'
import Banner from '../../component/Banner/main'

const Section = styled.section`
    margin: 20px 80px;
    @media (max-width: 768px) {
        margin: 20px 20px;
    }
`

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
    return (
        <Section>
            <Banner cheminImage={ImageBcgMer}>
                Chez vous, partout et ailleurs
            </Banner>
            <AppartList>
                {locationList.map(({ id, title, cover }) => (
                    <div
                        key={id}
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            height: '320px',
                        }}
                    >
                        <AppartItem cover={cover} title={title} />
                    </div>
                ))}
            </AppartList>
        </Section>
    )
}

export default Home
