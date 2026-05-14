import { useEffect, useRef, useState } from 'react'
import { guidedTourSteps } from '../../../app/constants'
import { speakAssistantMessage } from '../../../utils/speech'
import './AiAvatar.css'

export function AiAvatar({ t, onStartTour }) {
  const mountRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const speakingRef = useRef(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [activeSignal, setActiveSignal] = useState('intro')

  useEffect(() => {
    speakingRef.current = isSpeaking
  }, [isSpeaking])

  useEffect(() => {
    let renderer
    let frame
    let scene
    let camera
    let resizeObserver
    let isMounted = true

    async function initScene() {
      const THREE = await import('three')
      if (!isMounted || !mountRef.current) return

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
      camera.position.set(0, 0.15, 6)

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
      mountRef.current.appendChild(renderer.domElement)

      const group = new THREE.Group()
      group.scale.setScalar(0.88)
      scene.add(group)

      const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x8df1ff,
        emissive: 0x1b8296,
        emissiveIntensity: 0.24,
        roughness: 0.2,
        metalness: 0.08,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
      })
      const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0x9efbff,
        emissive: 0x00a6c0,
        emissiveIntensity: 0.34,
        roughness: 0.08,
        metalness: 0.12,
        transparent: true,
        opacity: 0.28,
        wireframe: true,
        depthWrite: false,
      })
      const smileMaterial = new THREE.MeshBasicMaterial({
        color: 0xff7ab8,
        transparent: true,
        opacity: 0.72,
      })
      const eyeMaterial = new THREE.MeshBasicMaterial({
        color: 0xe9feff,
        transparent: true,
        opacity: 0.92,
      })

      const outerHead = new THREE.Mesh(new THREE.SphereGeometry(1.24, 42, 30), glassMaterial)
      outerHead.position.y = 0.62

      const innerHead = new THREE.Mesh(new THREE.SphereGeometry(0.82, 36, 24), coreMaterial)
      innerHead.position.y = 0.62

      const innerWire = new THREE.Mesh(new THREE.SphereGeometry(0.82, 32, 22), glassMaterial)
      innerWire.position.y = 0.62

      const eyeGeometry = new THREE.SphereGeometry(0.045, 16, 10)
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(-0.25, 0.72, 0.8)
      rightEye.position.set(0.25, 0.72, 0.8)

      const smile = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.01, 6, 40, Math.PI), smileMaterial)
      smile.position.set(0, 0.39, 0.82)
      smile.rotation.z = Math.PI

      const body = new THREE.Mesh(new THREE.ConeGeometry(0.56, 0.9, 36, 1, true), glassMaterial)
      body.position.y = -0.5
      body.rotation.x = Math.PI

      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.014, 6, 112), glassMaterial)
      halo.rotation.x = Math.PI / 2
      halo.position.y = 0.56
      const scanningHalo = new THREE.Mesh(
        new THREE.TorusGeometry(1.33, 0.013, 6, 112),
        new THREE.MeshBasicMaterial({ color: 0x8df1ff, transparent: true, opacity: 0.5 }),
      )
      scanningHalo.rotation.x = Math.PI / 2
      scanningHalo.position.y = 1.05
      const pinkHalo = new THREE.Mesh(
        new THREE.TorusGeometry(1.72, 0.01, 6, 112),
        new THREE.MeshBasicMaterial({ color: 0xff7ab8, transparent: true, opacity: 0.34 }),
      )
      pinkHalo.rotation.x = Math.PI / 2.12
      pinkHalo.rotation.z = 0.08
      pinkHalo.position.y = 0.48
      group.add(outerHead, innerHead, innerWire, leftEye, rightEye, smile, body, halo, scanningHalo, pinkHalo)

      const light = new THREE.PointLight(0x8df1ff, 2.4, 9)
      light.position.set(0, 2, 3)
      scene.add(light, new THREE.AmbientLight(0xffffff, 0.85))

      const particles = new THREE.BufferGeometry()
      const positions = new Float32Array(150 * 3)
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = (Math.random() - 0.5) * 5
        positions[i + 1] = (Math.random() - 0.5) * 4
        positions[i + 2] = (Math.random() - 0.5) * 3
      }
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const particleSystem = new THREE.Points(
        particles,
        new THREE.PointsMaterial({ color: 0x8df1ff, size: 0.018, transparent: true, opacity: 0.54 }),
      )
      group.add(particleSystem)

      const resize = () => {
        if (!mountRef.current || !renderer) return
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.position.z = width < 560 ? 7.5 : width < 760 ? 6.9 : 6
        camera.updateProjectionMatrix()
      }

      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(mountRef.current)
      resize()

      const animate = () => {
        const time = performance.now() * 0.001
        const speakBoost = speakingRef.current ? 0.065 : 0
        group.position.y = -0.1 + Math.sin(time * 1.35) * (0.08 + speakBoost)
        group.rotation.y += (mouseRef.current.x * 0.34 - group.rotation.y) * 0.04
        group.rotation.x += (-mouseRef.current.y * 0.16 - group.rotation.x) * 0.04
        const mouthPulse = speakingRef.current ? Math.abs(Math.sin(time * 10)) : 0
        smile.scale.x = 1 + mouthPulse * 0.12
        smile.scale.y = 1 + mouthPulse * 0.42
        smile.material.opacity = speakingRef.current ? 0.62 + mouthPulse * 0.28 : 0.72
        scanningHalo.position.y = 0.62 + Math.sin(time * 1.55) * 0.66
        scanningHalo.scale.setScalar(0.98 + Math.sin(time * 1.55) * 0.06)
        scanningHalo.material.opacity = 0.34 + Math.sin(time * 1.7) * 0.14
        halo.rotation.z = time * 0.42
        halo.rotation.x = Math.PI / 2 + Math.sin(time * 0.9) * 0.055
        halo.position.y = 0.56 + Math.sin(time * 1.2) * 0.08
        pinkHalo.rotation.z = -time * 0.34
        pinkHalo.rotation.x = Math.PI / 2.12 + Math.cos(time * 0.85) * 0.07
        pinkHalo.position.y = 0.48 + Math.cos(time * 1.05) * 0.07
        particleSystem.rotation.y = time * 0.08
        renderer.render(scene, camera)
        frame = requestAnimationFrame(animate)
      }
      animate()
    }

    initScene()

    return () => {
      isMounted = false
      cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      renderer?.dispose()
      if (renderer?.domElement?.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [])

  const speakText = (message, signal = 'intro') => {
    setActiveSignal(signal)
    setIsSpeaking(true)
    speakingRef.current = true
    speakAssistantMessage(message, t.aiButton === 'Activar IA' ? 'es' : 'en').finally(() => {
      speakingRef.current = false
      setIsSpeaking(false)
    })
  }

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseRef.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    }
  }

  return (
    <div className="ai-stage" onMouseMove={onMouseMove} onMouseLeave={() => (mouseRef.current = { x: 0, y: 0 })}>
      <div className={`ai-canvas-wrap signal-${activeSignal} ${isSpeaking ? 'is-speaking' : ''}`}>
        <div ref={mountRef} className="ai-canvas" />
        <span className="ai-signal-line" />
        <div className="ai-caption">
          <span>{isSpeaking ? t.aiSpeaking : 'Online'}</span>
          <strong>{activeSignal}</strong>
        </div>
        <div className="ai-actions">
          <button onClick={() => speakText(t.aiScript, 'intro')}>{t.aiButton}</button>
          {['profile', 'value', 'projects', 'contact', 'experience'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: sectionId }))
                speakText(t.aiResponses[sectionId], sectionId)
              }}
            >
              {t.nav[sectionId]}
            </button>
          ))}
          <button className="ai-action-primary" onClick={onStartTour}>
            {t.assistantTour}
          </button>
          {['education', 'stack'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: sectionId }))
                speakText(t.aiResponses[sectionId], sectionId)
              }}
            >
              {t.nav[sectionId]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
