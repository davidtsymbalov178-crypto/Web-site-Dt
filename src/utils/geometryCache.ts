import * as THREE from 'three'
import type { ShapeType } from '../config/shapes'

const baseGeometries: Record<ShapeType, () => THREE.BufferGeometry> = {
  cube: () => new THREE.BoxGeometry(1, 1, 1),
  octahedron: () => new THREE.OctahedronGeometry(1),
  tetrahedron: () => new THREE.TetrahedronGeometry(1),
  torus: () => new THREE.TorusGeometry(0.7, 0.28, 8, 16),
  icosahedron: () => new THREE.IcosahedronGeometry(1, 0),
  dodecahedron: () => new THREE.DodecahedronGeometry(1, 0),
}

const edgesCache = new Map<ShapeType, THREE.EdgesGeometry>()

export function getEdgesGeometry(type: ShapeType): THREE.EdgesGeometry {
  const cached = edgesCache.get(type)
  if (cached) return cached

  const edges = new THREE.EdgesGeometry(baseGeometries[type]())
  edgesCache.set(type, edges)
  return edges
}
