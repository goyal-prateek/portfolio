import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { AvatarScene, SkillsScene } from './three-scenes'

function createCanvasLayer(container: HTMLElement) {
  const layer = document.createElement('div')
  layer.className = 'three-canvas-layer'
  container.append(layer)
  return layer
}

export function mountAvatar3d(container: HTMLElement) {
  if (container.dataset.threeMounted === 'true') return
  container.dataset.threeMounted = 'true'

  const layer = createCanvasLayer(container)
  const markReady = () => {
    container.dataset.threeReady = 'true'
  }

  createRoot(layer).render(createElement(AvatarScene, { onReady: markReady }))
}

export function mountSkills3d(container: HTMLElement) {
  if (container.dataset.threeMounted === 'true') return
  container.dataset.threeMounted = 'true'

  const layer = createCanvasLayer(container)
  const markReady = () => {
    container.dataset.threeReady = 'true'
  }

  createRoot(layer).render(createElement(SkillsScene, { onReady: markReady }))
}
