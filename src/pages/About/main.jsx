import Banner from '../../component/Banner/main'
import ImageBcgMontagne from '../../assets/lamontagne_kasa.png'
import Collapse from '../../component/Collapse/main'
import { aboutUsList } from '../../Data/AboutUs'

function AboutUs() {
    return (
        <section>
            <Banner cheminImage={ImageBcgMontagne} />

            {/* Parcourrir la liste du tableau pour afficher chaque éléments de la description */}
            {aboutUsList.map(({ title, description }) => (
                <Collapse
                    key={title}
                    title={title}
                    description={description}
                    IsVisible={true}
                />
            ))}
        </section>
    )
}

export default AboutUs
