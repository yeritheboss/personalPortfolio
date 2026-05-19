import { useEffect, useRef, useState } from 'react'
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
    let visibilityObserver
    let isMounted = true
    let isSceneVisible = true
    let isDocumentVisible = !document.hidden

    async function initScene() {
      const THREE = await import('three')
      if (!isMounted || !mountRef.current) return

      const isCompactDevice = window.matchMedia('(max-width: 640px), (pointer: coarse)').matches
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const detail = {
        sphereSegments: isCompactDevice ? [28, 18] : [42, 28],
        innerSegments: isCompactDevice ? [24, 16] : [36, 24],
        outerDots: isCompactDevice ? 280 : 620,
        innerDots: isCompactDevice ? 150 : 320,
        beamLines: isCompactDevice ? 10 : 18,
        ringSegments: isCompactDevice ? 72 : 120,
        particles: isCompactDevice ? 55 : 150,
        pixelRatio: isCompactDevice ? 1.15 : 1.6,
      }

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
      camera.position.set(0, 0.15, 6)

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isCompactDevice })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, detail.pixelRatio))
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
      mountRef.current.appendChild(renderer.domElement)

      const group = new THREE.Group()
      group.scale.setScalar(0.88)
      scene.add(group)
      const floorGroup = new THREE.Group()
      floorGroup.scale.setScalar(0.88)
      scene.add(floorGroup)

      const createBubbleMaterial = (color, opacity = 0.72, power = 2.4) =>
        new THREE.ShaderMaterial({
          uniforms: {
            glowColor: { value: new THREE.Color(color) },
            opacity: { value: opacity },
            power: { value: power },
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vec4 worldPosition = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPosition.xyz;
              gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
          `,
          fragmentShader: `
            uniform vec3 glowColor;
            uniform float opacity;
            uniform float power;
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            void main() {
              vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
              float rim = pow(1.0 - abs(dot(vNormal, viewDirection)), power);
              float center = pow(max(dot(vNormal, viewDirection), 0.0), 8.0) * 0.05;
              gl_FragColor = vec4(glowColor, (rim + center) * opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        })

      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x061426,
        transparent: true,
        opacity: 0.018,
        depthWrite: false,
      })
      const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0x35dfff,
        emissive: 0x00b7ff,
        emissiveIntensity: 0.36,
        roughness: 0.08,
        metalness: 0.12,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      const pointMaterial = new THREE.PointsMaterial({
        color: 0x20f0ff,
        size: 0.012,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const innerPointMaterial = new THREE.PointsMaterial({
        color: 0x67f8ff,
        size: 0.01,
        transparent: true,
        opacity: 0.58,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const outerAuraMaterial = createBubbleMaterial(0x10e8ff, 0.42, 1.35)
      const innerAuraMaterial = createBubbleMaterial(0x22eaff, 0.48, 1.55)
      const floorMaterial = new THREE.MeshBasicMaterial({
        color: 0x38e8ff,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const smileMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6bde,
        transparent: true,
        opacity: 0.78,
      })
      const eyeMaterial = new THREE.MeshBasicMaterial({
        color: 0x53efff,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
      })

      const createSphereDots = (radius, count, material, y = 0) => {
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i += 1) {
          const phi = Math.acos(1 - 2 * Math.random())
          const theta = Math.random() * Math.PI * 2
          const index = i * 3
          positions[index] = Math.sin(phi) * Math.cos(theta) * radius
          positions[index + 1] = Math.cos(phi) * radius + y
          positions[index + 2] = Math.sin(phi) * Math.sin(theta) * radius
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        return new THREE.Points(geometry, material)
      }

      const outerAura = new THREE.Mesh(new THREE.SphereGeometry(1.29, ...detail.sphereSegments), outerAuraMaterial)
      outerAura.position.y = 0.62
      const outerDots = createSphereDots(1.25, detail.outerDots, pointMaterial, 0.62)

      const innerHead = new THREE.Mesh(new THREE.SphereGeometry(0.78, ...detail.innerSegments), coreMaterial)
      innerHead.position.y = 0.62
      const innerAura = new THREE.Mesh(new THREE.SphereGeometry(0.85, ...detail.innerSegments), innerAuraMaterial)
      innerAura.position.y = 0.62

      const innerDots = createSphereDots(0.83, detail.innerDots, innerPointMaterial, 0.62)

      const eyeGeometry = new THREE.SphereGeometry(0.07, 18, 12)
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(-0.25, 0.72, 0.79)
      rightEye.position.set(0.25, 0.72, 0.79)

      const smile = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.01, 6, 40, Math.PI), smileMaterial)
      smile.position.set(0, 0.39, 0.82)
      smile.rotation.z = Math.PI

      const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x38e8ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      const body = new THREE.Mesh(
        new THREE.ConeGeometry(0.68, 1.15, 42, 1, true),
        bodyMaterial,
      )
      body.position.y = -0.66
      body.rotation.x = Math.PI
      const innerBeam = new THREE.Mesh(new THREE.ConeGeometry(0.34, 1.05, 42, 1, true), bodyMaterial.clone())
      innerBeam.position.y = -0.6
      innerBeam.rotation.x = Math.PI
      innerBeam.material.opacity = 0.14
      const outerBeam = new THREE.Mesh(new THREE.ConeGeometry(0.88, 1.28, 64, 1, true), bodyMaterial.clone())
      outerBeam.position.y = -0.72
      outerBeam.rotation.x = Math.PI
      outerBeam.material.opacity = 0.075
      const beamLineMaterial = new THREE.LineBasicMaterial({ color: 0x67f8ff, transparent: true, opacity: 0.26, blending: THREE.AdditiveBlending, depthWrite: false })
      const beamLines = new THREE.Group()
      for (let i = 0; i < detail.beamLines; i += 1) {
        const theta = (i / detail.beamLines) * Math.PI * 2
        const topRadius = i % 2 === 0 ? 0.58 : 0.36
        const points = [
          new THREE.Vector3(Math.cos(theta) * topRadius, -0.1, Math.sin(theta) * topRadius),
          new THREE.Vector3(0, -1.24, 0),
        ]
        beamLines.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), beamLineMaterial.clone()))
      }
      const beamCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 20, 12),
        new THREE.MeshBasicMaterial({ color: 0x8df1ff, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }),
      )
      beamCore.position.y = -1.24
      const floorRings = [0.46, 0.78, 1.16, 1.58, 2.05].map((radius, index) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.006, 5, detail.ringSegments), floorMaterial.clone())
        ring.rotation.x = Math.PI / 2
        ring.position.y = -1.22
        ring.material.opacity = 0.26 - index * 0.04
        return ring
      })

      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.014, 6, detail.ringSegments), glassMaterial)
      halo.rotation.x = Math.PI / 2
      halo.position.y = 0.56
      const scanningHalo = new THREE.Mesh(
        new THREE.TorusGeometry(1.33, 0.013, 6, detail.ringSegments),
        new THREE.MeshBasicMaterial({ color: 0x39e1ff, transparent: true, opacity: 0.58 }),
      )
      scanningHalo.rotation.x = Math.PI / 2
      scanningHalo.position.y = 1.05
      const pinkHalo = new THREE.Mesh(
        new THREE.TorusGeometry(1.72, 0.01, 6, detail.ringSegments),
        new THREE.MeshBasicMaterial({ color: 0xff58d6, transparent: true, opacity: 0.42 }),
      )
      pinkHalo.rotation.x = Math.PI / 2.12
      pinkHalo.rotation.z = 0.08
      pinkHalo.position.y = 0.48
      group.add(
        outerAura,
        outerDots,
        innerAura,
        innerHead,
        innerDots,
        leftEye,
        rightEye,
        smile,
        outerBeam,
        body,
        innerBeam,
        beamLines,
        beamCore,
        halo,
        scanningHalo,
        pinkHalo,
      )
      floorGroup.add(...floorRings)

      const light = new THREE.PointLight(0x39e1ff, 2.15, 9)
      light.position.set(0, 2, 3)
      const magentaLight = new THREE.PointLight(0xff58d6, 0.9, 8)
      magentaLight.position.set(-1.4, 0.35, 2.2)
      scene.add(light, magentaLight, new THREE.AmbientLight(0xd9f8ff, 0.48))

      const particles = new THREE.BufferGeometry()
      const positions = new Float32Array(detail.particles * 3)
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = (Math.random() - 0.5) * 5
        positions[i + 1] = (Math.random() - 0.5) * 4
        positions[i + 2] = (Math.random() - 0.5) * 3
      }
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const particleSystem = new THREE.Points(
        particles,
        new THREE.PointsMaterial({ color: 0x39e1ff, size: 0.019, transparent: true, opacity: 0.62 }),
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

      const handleDocumentVisibility = () => {
        isDocumentVisible = !document.hidden
        if (isDocumentVisible && isSceneVisible && !frame) animate()
      }

      document.addEventListener('visibilitychange', handleDocumentVisibility)

      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          isSceneVisible = entry.isIntersecting
          if (isSceneVisible && isDocumentVisible && !frame) animate()
        },
        { threshold: 0.08 },
      )
      visibilityObserver.observe(mountRef.current)

      const animate = () => {
        if (!isMounted || !isDocumentVisible || !isSceneVisible) {
          frame = null
          return
        }

        const time = performance.now() * 0.001
        const speakBoost = speakingRef.current ? 0.065 : 0
        const floatY = -0.1 + Math.sin(time * 1.35) * (0.08 + speakBoost)
        const impact = Math.max(0, Math.sin(time * 1.35) * -1)
        group.position.y = floatY
        group.rotation.y += (mouseRef.current.x * 0.56 - group.rotation.y) * 0.07
        group.rotation.x += (-mouseRef.current.y * 0.3 - group.rotation.x) * 0.07
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
        pinkHalo.position.y = 0.48 - Math.sin(time * 1.55) * 0.18
        outerAura.scale.setScalar(1 + Math.sin(time * 1.1) * 0.018)
        outerAura.material.uniforms.opacity.value = 0.28 + Math.sin(time * 1.35) * 0.05
        outerDots.rotation.y = time * 0.08
        outerDots.rotation.x = Math.sin(time * 0.28) * 0.018
        innerAura.scale.setScalar(1 + Math.sin(time * 1.25) * 0.012)
        innerAura.material.uniforms.opacity.value = 0.34 + Math.sin(time * 1.4) * 0.04
        innerDots.rotation.y = -time * 0.055
        body.material.opacity = 0.17 + Math.sin(time * 1.4) * 0.04
        innerBeam.material.opacity = 0.12 + Math.cos(time * 1.6) * 0.025
        outerBeam.material.opacity = 0.06 + Math.sin(time * 1.2) * 0.02
        beamLines.rotation.y = time * 0.08
        beamLines.children.forEach((line, index) => {
          line.material.opacity = 0.12 + impact * 0.15 + Math.sin(time * 1.8 - index * 0.25) * 0.035
        })
        beamCore.scale.setScalar(1 + impact * 0.35 + Math.sin(time * 2.2) * 0.08)
        beamCore.material.opacity = 0.7 + impact * 0.25
        floorRings.forEach((ring, index) => {
          const wave = Math.max(0, Math.sin(time * 2.4 - index * 0.42))
          ring.scale.setScalar(1 + impact * 0.1 + wave * 0.055)
          ring.material.opacity = 0.13 - index * 0.016 + impact * (0.16 - index * 0.018) + wave * 0.045
          ring.rotation.z = time * (0.05 + index * 0.018)
        })
        particleSystem.rotation.y = time * 0.08
        renderer.render(scene, camera)
        frame = reducedMotion ? null : requestAnimationFrame(animate)
      }
      animate()

      return () => document.removeEventListener('visibilitychange', handleDocumentVisibility)
    }

    let removeDocumentVisibilityListener
    initScene()
      .then((cleanup) => {
        removeDocumentVisibilityListener = cleanup
      })

    return () => {
      isMounted = false
      cancelAnimationFrame(frame)
      removeDocumentVisibilityListener?.()
      resizeObserver?.disconnect()
      visibilityObserver?.disconnect()
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

  useEffect(() => {
    const handleIntro = () => speakText(t.aiScript, 'intro')
    window.addEventListener('assistant:speak-intro', handleIntro)
    return () => window.removeEventListener('assistant:speak-intro', handleIntro)
  })

  useEffect(() => {
    const handleSpeakingStart = (event) => {
      setActiveSignal(event.detail?.signal ?? 'intro')
      speakingRef.current = true
      setIsSpeaking(true)
    }
    const handleSpeakingEnd = () => {
      speakingRef.current = false
      setIsSpeaking(false)
    }

    window.addEventListener('assistant:speaking-start', handleSpeakingStart)
    window.addEventListener('assistant:speaking-end', handleSpeakingEnd)

    return () => {
      window.removeEventListener('assistant:speaking-start', handleSpeakingStart)
      window.removeEventListener('assistant:speaking-end', handleSpeakingEnd)
    }
  }, [])

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
          {['profile', 'value', 'projects', 'stack', 'experience', 'education', 'contact'].map((sectionId) => (
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
