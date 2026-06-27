import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import { aboutClusters } from '../config/shapes'

export default function About() {
  return (
    <SectionWithShapes id="about" clusters={aboutClusters} className="section-pad">
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">01</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-6 sm:mb-8">Обо мне</h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text">
              Специализируюсь на TypeScript и Python. Наибольший интерес представляет
              создание продуктов, которыми действительно пользуются.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="body-text mt-4 sm:mt-5">
              Работаю с фронтендом, бэкендом и базами данных. Предпочитаю
              чётко сформулированные задачи и прозрачную коммуникацию.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="body-text mt-4 sm:mt-5">
              Данный сайт находится в разработке. В ближайшее время здесь
              появятся подробные кейсы и описания проектов.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
