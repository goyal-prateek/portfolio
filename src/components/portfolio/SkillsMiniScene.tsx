import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function useDarkMode() {
  const [dark, setDark] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const fn = () => setDark(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return dark
}

function FloatingShapes({ reducedMotion }: { reducedMotion: boolean }) {
  const g = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (reducedMotion || !g.current) return
    g.current.rotation.y += delta * 0.15
  })

  const accent = '#14b8a6'
  const accentMuted = '#115e59'

  const mat = (roughness: number, metalness: number) => (
    <meshPhysicalMaterial
      color={accentMuted}
      emissive={accent}
      emissiveIntensity={0.12}
      metalness={metalness}
      roughness={roughness}
    />
  )

  const inner = (
    <group ref={g}>
      <mesh position={[-0.55, 0.15, 0]} rotation={[0.4, 0.5, 0.2]}>
        <icosahedronGeometry args={[0.38, 0]} />
        {mat(0.35, 0.7)}
      </mesh>
      <mesh position={[0.45, -0.1, 0.15]} rotation={[-0.3, 0.6, 0]}>
        <octahedronGeometry args={[0.32, 0]} />
        {mat(0.25, 0.85)}
      </mesh>
      <mesh position={[0.05, 0.35, -0.2]} rotation={[0.2, -0.4, 0.3]}>
        <tetrahedronGeometry args={[0.28, 0]} />
        {mat(0.4, 0.55)}
      </mesh>
    </group>
  )

  if (reducedMotion) return inner

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      {inner}
    </Float>
  )
}

function MiniSceneContent({ reducedMotion, dark }: { reducedMotion: boolean; dark: boolean }) {
  return (
    <>
      <ambientLight intensity={dark ? 0.35 : 0.5} />
      <pointLight position={[2, 2, 3]} intensity={0.8} color={dark ? '#99f6e4' : '#0d9488'} />
      <FloatingShapes reducedMotion={reducedMotion} />
      <Sparkles
        count={28}
        scale={[2.2, 1.2, 1.2]}
        position={[0, 0, 0]}
        size={1.2}
        speed={reducedMotion ? 0 : 0.25}
        opacity={0.35}
        color={dark ? '#5eead4' : '#14b8a6'}
      />
    </>
  )
}

/** Lightweight decorative 3D strip — no external models */
export function SkillsMiniScene({ className = '' }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion()
  const dark = useDarkMode()

  return (
    <div
      className={`pointer-events-none relative h-28 w-full select-none sm:h-32 ${className}`}
      aria-hidden
    >
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0.2, 2.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        onCreated={({ scene }) => {
          scene.background = null
        }}
      >
        <MiniSceneContent reducedMotion={reducedMotion} dark={dark} />
      </Canvas>
    </div>
  )
}
