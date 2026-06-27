import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealImage, RevealItem } from './Reveal'
import WorkPreview from './WorkPreview'
import { workClusters } from '../config/shapes'

const points = [
  {
    title: 'Прямой контакт',
    text: 'Связь через Telegram — без посредников и лишних согласований, при необходимости.',
  },
  {
    title: 'Полный цикл разработки',
    text: 'Самостоятельно веду проект от вёрстки и логики до развёртывания на сервере.',
  },
  {
    title: 'Прозрачные сроки',
    text: 'Заранее озвучиваю реалистичные сроки и предлагаю оптимальные решения для старта.',
  },
]

export default function Work() {
  return (
    <SectionWithShapes id="work" clusters={workClusters} className="section-pad border-t border-subtle">
      <div className="page-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-20">
          <RevealGroup>
            <RevealItem>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-neutral-400">
                рабочий процесс
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="section-title mb-6 sm:mb-8">
                Как выглядит работа над вашим проектом
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="body-text mb-8 max-w-md">
                Каждый проект разрабатывается индивидуально — с учётом задачи,
                целей и требований заказчика. Без шаблонных решений.
              </p>
            </RevealItem>

            {points.map((point) => (
              <RevealItem key={point.title}>
                <div className="mb-5 border-l-2 border-neutral-300 pl-4 dark:border-neutral-700 sm:pl-5">
                  <p className="mb-1 font-medium">{point.title}</p>
                  <p className="text-[0.95rem] leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                    {point.text}
                  </p>
                </div>
              </RevealItem>
            ))}

            <RevealItem>
              <a href="#contact" className="btn-main mt-2 w-full sm:w-auto">
                Обсудить проект
              </a>
            </RevealItem>
          </RevealGroup>

          <RevealImage>
            <div className="relative z-10">
              <WorkPreview />
            </div>
          </RevealImage>
        </div>
      </div>
    </SectionWithShapes>
  )
}
