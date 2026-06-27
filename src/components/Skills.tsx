import { motion } from 'framer-motion'
import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber, itemVariant } from './Reveal'
import { skillsClusters } from '../config/shapes'

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Git',
  'Docker',
]

export default function Skills() {
  return (
    <SectionWithShapes id="skills" clusters={skillsClusters} className="section-pad border-t border-subtle">
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">02</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-8 sm:mb-10">Навыки</h2>
          </RevealItem>
          <motion.ul
            className="grid grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-8 lg:grid-cols-3"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            }}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill}
                variants={itemVariant}
                className="text-base text-neutral-700 before:mr-2 before:text-neutral-400 before:content-['·'] sm:text-[0.95rem] lg:text-base"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
