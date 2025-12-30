import { useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'
import './SplineViewer.css'

// Spline 공개 씬 URL - 나중에 본인의 Spline 프로젝트 URL로 변경하세요
const splineUrl = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode'

function SplineViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current)
      app.load(splineUrl).catch(() => {
        console.log('Spline scene loaded or using fallback')
      })
    }
  }, [])

  return (
    <div className="spline-container">
      <canvas ref={canvasRef} className="spline-canvas"></canvas>
      <div className="spline-fallback">
        <div className="floating-object"></div>
      </div>
    </div>
  )
}

export default SplineViewer
