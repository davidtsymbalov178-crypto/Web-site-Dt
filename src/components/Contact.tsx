import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import { contactClusters } from '../config/shapes'

export default function Contact() {
  return (
    <SectionWithShapes
      id="contact"
      clusters={contactClusters}
      className="section-pad border-t border-subtle !pb-[calc(5rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">04</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-5 sm:mb-6">Контакты</h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text mb-8 max-w-sm sm:mb-10 lg:max-w-md">
              Опишите задачу кратко — я отвечу и сообщу, смогу ли помочь, а также
              уточню сроки и стоимость.
            </p>
          </RevealItem>
          <RevealItem>
            <a
              href="https://t.me/DavidTsymbalovWork"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-main w-full sm:w-auto"
            >
              @DavidTsymbalovWork
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
