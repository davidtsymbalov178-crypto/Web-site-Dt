import { useMemo, useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { ShapeClusterConfig, ShapeConfig } from '../config/shapes'
import { useShapeColor } from '../hooks/useShapeColor'
import WireCanvas from './WireCanvas'

function spreadShapes(clusters: ShapeClusterConfig[]): ShapeConfig[] {
  const offsets: [number, number][] = [
    [3.5, 1],
    [-3.8, -1.2],
    [2.8, -1.5],
    [-3, 1.8],
  ]

  return clusters.flatMap((cluster, i) => {
    const [ox, oy] = offsets[i % offsets.length]
    return cluster.shapes.map((shape) => ({
      ...shape,
      position: [
        shape.position[0] + ox,
        shape.position[1] + oy,
        shape.position[2],
      ] as [number, number, number],
    }))
  })
}

interface SectionWithShapesProps {
  id: string
  className?: string
  clusters: ShapeClusterConfig[]
  children: ReactNode
}

export default function SectionWithShapes({
  id,
  className = '',
  clusters,
  children,
}: SectionWithShapesProps) {
  const ref = useRef<HTMLElement>(null)
  const color = useShapeColor()
  const shapes = useMemo(() => spreadShapes(clusters), [clusters])
  const avgParallax = clusters.reduce((sum, c) => sum + c.parallax, 0) / clusters.length

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40 * avgParallax, -40 * avgParallax])

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <WireCanvas shapes={shapes} color={color} />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}
