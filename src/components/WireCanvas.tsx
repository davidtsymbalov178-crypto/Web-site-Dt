import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { ShapeConfig } from '../config/shapes'
import { useShapeGlow } from '../hooks/useShapeColor'
import { useVisibility } from '../hooks/useVisibility'
import { getEdgesGeometry } from '../utils/geometryCache'

const mouse = { x: 0, y: 0 }
const smoothMouse = { x: 0, y: 0 }

const isCoarsePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

if (typeof window !== 'undefined' && !isCoarsePointer) {
  let ticking = false
  window.addEventListener(
    'mousemove',
    (e) => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
        mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
        ticking = false
      })
    },
    { passive: true },
  )
}

function getMaxDpr() {
  if (typeof window === 'undefined') return 1
  const isMobile = window.innerWidth < 768
  if (isMobile) return 1
  return Math.min(window.devicePixelRatio, 2)
}

function WireShape({
  config,
  color,
  index,
}: {
  config: ShapeConfig
  color: string
  index: number
}) {
  const ref = useRef<THREE.LineSegments>(null)
  const base = config.position
  const rot = config.rotation ?? [0, 0, 0]
  const edges = getEdgesGeometry(config.type)

  useFrame((state, delta) => {
    if (!ref.current) return

    if (!isCoarsePointer) {
      smoothMouse.x += (mouse.x - smoothMouse.x) * Math.min(delta * 4, 1)
      smoothMouse.y += (mouse.y - smoothMouse.y) * Math.min(delta * 4, 1)
    }

    const t = state.clock.elapsedTime * config.speed
    const sway = isCoarsePointer ? 0 : 0.25 + index * 0.06
    ref.current.rotation.x = rot[0] + t * 0.7
    ref.current.rotation.y = rot[1] + t
    ref.current.rotation.z = rot[2] + t * 0.4
    ref.current.position.x = base[0] + smoothMouse.x * sway
    ref.current.position.y = base[1] - smoothMouse.y * sway * 0.5
    ref.current.position.z = base[2]
  })

  return (
    <lineSegments ref={ref} scale={config.scale} geometry={edges}>
      <lineBasicMaterial color={color} transparent opacity={config.opacity} />
    </lineSegments>
  )
}

function Scene({ shapes, color }: { shapes: ShapeConfig[]; color: string }) {
  return (
    <>
      {shapes.map((shape, i) => (
        <WireShape key={`${shape.type}-${i}`} config={shape} color={color} index={i} />
      ))}
    </>
  )
}

export default function WireCanvas({
  shapes,
  color,
  className = '',
}: {
  shapes: ShapeConfig[]
  color: string
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const visible = useVisibility(containerRef)
  const glow = useShapeGlow()
  const maxDpr = getMaxDpr()

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className}`}
      style={{ filter: visible ? glow : 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, maxDpr]}
        frameloop={visible ? 'always' : 'never'}
        gl={{
          alpha: true,
          antialias: maxDpr > 1,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene shapes={shapes} color={color} />
        </Suspense>
      </Canvas>
    </div>
  )
}
