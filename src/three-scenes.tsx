import { Canvas, useFrame } from '@react-three/fiber'
import {
  Center,
  Environment,
  Float,
  Lightformer,
  Sparkles,
  useGLTF,
} from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import type { Group } from 'three'

const HELMET_PATH = '/models/DamagedHelmet.glb'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const update = () => setMatches(mediaQuery.matches)

    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [query])

  return matches
}

function Helmet({
  reducedMotion,
  onReady,
}: {
  reducedMotion: boolean
  onReady: () => void
}) {
  const { scene } = useGLTF(HELMET_PATH)
  const clone = useMemo(() => scene.clone(), [scene])
  const group = useRef<Group>(null)

  useEffect(onReady, [onReady])

  useFrame((_, delta) => {
    if (reducedMotion || !group.current) return
    group.current.rotation.y += delta * 0.3
  })

  const model = (
    <group ref={group} position={[0, -0.2, 0]}>
      <Center>
        <primitive object={clone} scale={1.34} rotation={[0.18, -0.78, 0]} />
      </Center>
    </group>
  )

  return reducedMotion ? (
    model
  ) : (
    <Float speed={1.45} rotationIntensity={0.14} floatIntensity={0.16}>
      {model}
    </Float>
  )
}

export function AvatarScene({ onReady }: { onReady: () => void }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const dark = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <Canvas
      className="size-full touch-none"
      camera={{ position: [0, -0.05, 4.8], fov: 33 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={dark ? 0.55 : 0.72} />
        <spotLight
          position={[5, 7, 6]}
          angle={0.38}
          penumbra={0.8}
          intensity={dark ? 1.15 : 1.4}
        />
        <pointLight
          position={[-3.5, 1.5, -2]}
          intensity={dark ? 0.55 : 0.42}
          color={dark ? '#99f6e4' : '#14b8a6'}
        />
        <Helmet reducedMotion={reducedMotion} onReady={onReady} />
        <Environment resolution={64}>
          <Lightformer
            intensity={dark ? 3 : 4}
            position={[2, 3, 4]}
            rotation-y={-0.4}
            scale={[4, 4, 1]}
          />
          <Lightformer
            intensity={dark ? 1.5 : 2.5}
            position={[-3, 0, 1]}
            rotation-y={Math.PI / 2}
            scale={[2, 3, 1]}
            color={dark ? '#5eead4' : '#99f6e4'}
          />
        </Environment>
      </Suspense>
    </Canvas>
  )
}

function FloatingShapes({
  reducedMotion,
  onReady,
}: {
  reducedMotion: boolean
  onReady: () => void
}) {
  const group = useRef<Group>(null)

  useEffect(onReady, [onReady])

  useFrame((state, delta) => {
    if (reducedMotion || !group.current) return
    group.current.rotation.y += delta * 0.18
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.55) * 0.08
  })

  const shapes = (
    <group ref={group}>
      <mesh position={[-0.58, 0.12, 0]} rotation={[0.4, 0.5, 0.2]}>
        <icosahedronGeometry args={[0.38, 0]} />
        <meshPhysicalMaterial
          color="#115e59"
          emissive="#14b8a6"
          emissiveIntensity={0.12}
          metalness={0.7}
          roughness={0.35}
        />
      </mesh>
      <mesh position={[0.46, -0.1, 0.14]} rotation={[-0.3, 0.6, 0]}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshPhysicalMaterial
          color="#115e59"
          emissive="#14b8a6"
          emissiveIntensity={0.12}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
      <mesh position={[0.04, 0.36, -0.22]} rotation={[0.2, -0.4, 0.3]}>
        <tetrahedronGeometry args={[0.28, 0]} />
        <meshPhysicalMaterial
          color="#115e59"
          emissive="#14b8a6"
          emissiveIntensity={0.12}
          metalness={0.55}
          roughness={0.4}
        />
      </mesh>
    </group>
  )

  return reducedMotion ? (
    shapes
  ) : (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      {shapes}
    </Float>
  )
}

export function SkillsScene({ onReady }: { onReady: () => void }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const dark = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <Canvas
      className="size-full"
      camera={{ position: [0, 0.2, 2.4], fov: 42 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
    >
      <ambientLight intensity={dark ? 0.38 : 0.54} />
      <pointLight
        position={[2, 2, 3]}
        intensity={0.82}
        color={dark ? '#99f6e4' : '#0d9488'}
      />
      <FloatingShapes reducedMotion={reducedMotion} onReady={onReady} />
      <Sparkles
        count={22}
        scale={[2.2, 1.2, 1.2]}
        size={1.1}
        speed={reducedMotion ? 0 : 0.24}
        opacity={0.34}
        color={dark ? '#5eead4' : '#14b8a6'}
      />
    </Canvas>
  )
}
