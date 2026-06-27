export type ShapeType = 'cube' | 'octahedron' | 'tetrahedron' | 'torus' | 'icosahedron' | 'dodecahedron'

export interface ShapeConfig {
  type: ShapeType
  position: [number, number, number]
  scale: number
  speed: number
  opacity: number
  rotation?: [number, number, number]
}

export interface ShapeClusterConfig {
  className: string
  parallax: number
  shapes: ShapeConfig[]
}

export const heroClusters: ShapeClusterConfig[] = [
  {
    className: '-right-4 top-4 h-[min(70vw,280px)] w-[min(70vw,280px)] sm:-right-16 sm:top-8 sm:h-[min(55vw,520px)] sm:w-[min(55vw,520px)]',
    parallax: 1.4,
    shapes: [
      { type: 'cube', position: [0.5, 0.3, 0], scale: 2.4, speed: 0.1, opacity: 0.7 },
      { type: 'octahedron', position: [-1.2, -0.8, -1], scale: 1.6, speed: 0.14, opacity: 0.5 },
      { type: 'torus', position: [1.5, -1, -0.5], scale: 1.8, speed: 0.08, opacity: 0.45 },
    ],
  },
  {
    className: '-left-12 bottom-0 h-[min(45vw,400px)] w-[min(45vw,400px)] hidden sm:block',
    parallax: 0.8,
    shapes: [
      { type: 'icosahedron', position: [0, 0, 0], scale: 2, speed: 0.12, opacity: 0.55 },
      { type: 'tetrahedron', position: [1.8, 1, -1], scale: 1.4, speed: 0.15, opacity: 0.4 },
    ],
  },
]

export const aboutClusters: ShapeClusterConfig[] = [
  {
    className: 'right-0 top-1/2 h-[min(65vw,260px)] w-[min(65vw,260px)] -translate-y-1/2 sm:h-[min(50vw,460px)] sm:w-[min(50vw,460px)]',
    parallax: 1.2,
    shapes: [
      { type: 'cube', position: [-0.5, 0, 0], scale: 2.6, speed: 0.09, opacity: 0.65, rotation: [0.3, 0.5, 0] },
      { type: 'dodecahedron', position: [1.5, 0.5, -1], scale: 1.5, speed: 0.11, opacity: 0.45 },
    ],
  },
  {
    className: 'left-0 top-8 h-[280px] w-[280px] opacity-80',
    parallax: 0.6,
    shapes: [
      { type: 'torus', position: [0, 0, 0], scale: 2.2, speed: 0.1, opacity: 0.5 },
    ],
  },
]

export const skillsClusters: ShapeClusterConfig[] = [
  {
    className: 'left-1/4 -top-6 h-[min(60vw,240px)] w-[min(60vw,240px)] sm:-top-10 sm:h-[380px] sm:w-[380px]',
    parallax: 1,
    shapes: [
      { type: 'octahedron', position: [0, 0, 0], scale: 2.8, speed: 0.13, opacity: 0.6 },
      { type: 'cube', position: [2, -1, -1.5], scale: 1.3, speed: 0.08, opacity: 0.35 },
    ],
  },
  {
    className: 'right-0 bottom-0 h-[340px] w-[340px]',
    parallax: 1.5,
    shapes: [
      { type: 'icosahedron', position: [0, 0.5, 0], scale: 2, speed: 0.1, opacity: 0.5 },
      { type: 'tetrahedron', position: [-1.5, -0.5, -1], scale: 1.6, speed: 0.14, opacity: 0.4 },
    ],
  },
]

export const workClusters: ShapeClusterConfig[] = [
  {
    className: '-left-8 top-1/4 h-[min(60vw,240px)] w-[min(60vw,240px)] sm:-left-16 sm:h-[min(45vw,400px)] sm:w-[min(45vw,400px)]',
    parallax: 1.1,
    shapes: [
      { type: 'cube', position: [0, 0, 0], scale: 2.2, speed: 0.1, opacity: 0.55 },
      { type: 'octahedron', position: [1.5, -0.5, -1], scale: 1.4, speed: 0.12, opacity: 0.4 },
    ],
  },
  {
    className: 'right-0 bottom-0 h-[min(55vw,220px)] w-[min(55vw,220px)] sm:h-[320px] sm:w-[320px]',
    parallax: 0.9,
    shapes: [
      { type: 'torus', position: [0, 0.3, 0], scale: 1.9, speed: 0.09, opacity: 0.45 },
      { type: 'tetrahedron', position: [-1, -0.8, -0.5], scale: 1.3, speed: 0.13, opacity: 0.35 },
    ],
  },
]

export const projectsClusters: ShapeClusterConfig[] = [
  {
    className: 'left-0 top-1/3 h-[min(65vw,260px)] w-[min(65vw,260px)] sm:h-[min(48vw,440px)] sm:w-[min(48vw,440px)]',
    parallax: 1.3,
    shapes: [
      { type: 'cube', position: [0.8, 0, 0], scale: 3, speed: 0.07, opacity: 0.55 },
      { type: 'torus', position: [-1, 1, -1], scale: 1.7, speed: 0.1, opacity: 0.4 },
      { type: 'octahedron', position: [0, -1.5, -0.5], scale: 1.2, speed: 0.12, opacity: 0.35 },
    ],
  },
  {
    className: 'right-8 bottom-8 h-[300px] w-[300px] hidden md:block',
    parallax: 0.7,
    shapes: [
      { type: 'dodecahedron', position: [0, 0, 0], scale: 2.2, speed: 0.09, opacity: 0.45 },
    ],
  },
]

export const contactClusters: ShapeClusterConfig[] = [
  {
    className: 'right-1/4 top-0 h-[min(65vw,260px)] w-[min(65vw,260px)] sm:h-[min(52vw,480px)] sm:w-[min(52vw,480px)]',
    parallax: 1.1,
    shapes: [
      { type: 'icosahedron', position: [0, 0, 0], scale: 2.5, speed: 0.1, opacity: 0.6 },
      { type: 'cube', position: [-2, 1, -1.5], scale: 1.5, speed: 0.08, opacity: 0.4 },
      { type: 'tetrahedron', position: [1.5, -1, 0], scale: 1.8, speed: 0.13, opacity: 0.45 },
    ],
  },
]
