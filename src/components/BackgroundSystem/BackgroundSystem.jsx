import './BackgroundSystem.css'

export function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="star-grid absolute inset-0 opacity-80" />
    </div>
  )
}
