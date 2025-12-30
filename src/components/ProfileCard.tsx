import { useState, useEffect } from 'react'
import './ProfileCard.css'

const skills = ['UX/UI', 'WEB_3D', 'SPLINE', 'REACT', 'TYPESCRIPT', 'FIGMA']

function ProfileCard() {
  const [currentTime, setCurrentTime] = useState('')
  const timezone = 'Asia/Seoul'
  const gmtOffset = 'GMT+9'

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <div className="profile-image">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
            alt="Profile" 
          />
        </div>
        <span className="username">C:\USER&gt;</span>
      </div>
      
      <div className="profile-content">
        <h1 className="greeting">HELLO!</h1>
        <h2 className="name">I'm <span className="highlight">YOUR_NAME</span></h2>
        
        <p className="description">
          <strong>PRODUCT_DESIGNER</strong> with 5+ years of production experience in various business areas. 
          Experienced in creating design solutions for mobile, websites, and services.
        </p>
        
        <div className="status">
          <span className="status-dot"></span>
          <span>■ STATUS: OPEN FOR FULL TIME WORK</span>
        </div>
        
        <div className="skills">
          {skills.map(skill => (
            <span key={skill} className="skill-tag">[{skill}]</span>
          ))}
        </div>
      </div>
      
      <div className="location-card">
        <div className="location-info">
          <h3>SEOUL.KR</h3>
          <p>{currentTime} {gmtOffset} <span className="local-time-label">LOCAL_TIME</span></p>
        </div>
        <div className="map-dot"></div>
      </div>
      
      <div className="action-buttons">
        <button className="btn btn-primary">► CONTACT.ME</button>
        <button className="btn btn-secondary">► CV.PDF</button>
      </div>
    </div>
  )
}

export default ProfileCard
