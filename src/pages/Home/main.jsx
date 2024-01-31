// import { Link } from 'react-router-dom'
import ImageBcgMer from '../../assets/lamer_kasa.png'
import styled from 'styled-components'
import { locationList } from '../../Data/LocationList'
import AppartItem from '../../component/AppartItem/main'

const Section = styled.section`
    margin: 20px 80px;
`

const SectionTitle = styled.div`
    height: 180px;
    border-radius: 15px;
    background-image: url('${ImageBcgMer}');
    background-position: center center;
    background-size: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 80px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        filter: brightness(0.5);
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
`

function Home() {
    return (
        <Section>
            <SectionTitle>
                <h1 style={{ position: 'absolute', fontSize: '2.3em' }}>
                    Chez vous, partout et ailleurs
                </h1>
            </SectionTitle>
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
