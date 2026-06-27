import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import { projectsClusters } from '../config/shapes'

export default function Projects() {
  return (
    <SectionWithShapes id="projects" clusters={projectsClusters} className="section-pad border-t border-subtle">
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">03</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-6 sm:mb-8">Проекты</h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text">
              Раздел находится в подготовке. Если у вас уже есть задача,
              {' '}
              <a href="#contact" className="link-underline">
                свяжитесь со мной в Telegram
              </a>
              — обсудим детали.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
