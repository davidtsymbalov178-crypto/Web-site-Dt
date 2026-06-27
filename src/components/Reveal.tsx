import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const viewport = { once: true, margin: '-50px' as const }

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease },
  },
}

export const itemVariant = item

const fade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
}

const image: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease },
  },
}

const number: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
}

export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export function RevealFade({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fade} className={className}>
      {children}
    </motion.div>
  )
}

export function RevealImage({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={image}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealNumber({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={number}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}
