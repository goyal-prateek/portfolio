import { Canvas, useFrame } from '@react-three/fiber'
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  Html,
  useGLTF,
  useProgress,
} from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import type { Group } from 'three'

const HELMET_PATH = '/models/DamagedHelmet.glb'

useGLTF.preload(HELMET_PATH)

function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="rounded-full bg-(--card)/85 px-2 py-1 text-[10px] font-medium text-(--muted-foreground) shadow-(--shadow-card) ring-1 ring-(--border) backdrop-blur-sm">
        {Math.round(progress)}%
      </div>
    </Html>
  )
}

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
    const onChange = () => setDark(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return dark
}

function Helmet({ reducedMotion }: { reducedMotion: boolean }) {
  const { scene } = useGLTF(HELMET_PATH)
  const clone = useMemo(() => scene.clone(), [scene])
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    if (reducedMotion || !group.current) return
    group.current.rotation.y += delta * 0.3
  })

  const content = (
    <group ref={group} position={[0, -0.25, 0]}>
      <Center>
        <primitive object={clone} scale={1.35} rotation={[0.18, -0.78, 0]} />
      </Center>
    </group>
  )

  if (reducedMotion) return content

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.18}>
      {content}
    </Float>
  )
}

function AvatarScene() {
  const reducedMotion = usePrefersReducedMotion()
  const dark = useDarkMode()

  return (
    <Canvas
      className="h-full w-full touch-none"
      camera={{ position: [0, -0.05, 4.8], fov: 33 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      onCreated={({ scene }) => {
        scene.background = null
      }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={dark ? 0.5 : 0.65} />
        <spotLight
          position={[5, 7, 6]}
          angle={0.38}
          penumbra={0.8}
          intensity={dark ? 1.1 : 1.35}
          castShadow
        />
        <pointLight
          position={[-3.5, 1.5, -2]}
          intensity={dark ? 0.5 : 0.35}
          color={dark ? '#99f6e4' : '#14b8a6'}
        />
        <Helmet reducedMotion={reducedMotion} />
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={dark ? 0.38 : 0.45}
          scale={4.2}
          blur={2.2}
          far={4}
        />
        <Environment preset={dark ? 'night' : 'studio'} />
      </Suspense>
    </Canvas>
  )
}

type AvatarModelProps = {
  className?: string
  ariaLabel?: string
}

export function AvatarModel({
  className = '',
  ariaLabel = '3D profile model',
}: AvatarModelProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl bg-(--muted) shadow-(--shadow-card) ring-1 ring-(--border) ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{
        backgroundImage:
          'radial-gradient(circle at 28% 22%, rgb(94 234 212 / 0.16), transparent 34%), linear-gradient(180deg, var(--card) 0%, var(--muted) 100%)',
      }}
    >
      <div className="absolute inset-0 rounded-[inherit] bg-linear-to-b from-white/10 via-transparent to-black/6 dark:from-white/4 dark:to-black/18" />
      <AvatarScene />
      <div className="pointer-events-none absolute inset-x-3 bottom-2 h-px bg-linear-to-r from-transparent via-(--accent)/45 to-transparent" />
    </div>
  )
}
