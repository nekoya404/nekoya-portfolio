import { useState } from 'react'
import './ProjectDescription.css'
import type { ProjectData, ProjectCategory } from '../data/projects/types'

// 타입 re-export (기존 코드 호환성 유지)
export type { ProjectData, ProjectCategory }

interface ProjectDescriptionProps {
  category: ProjectCategory
}

function ProjectDescription({ category }: ProjectDescriptionProps) {
  // key prop으로 인해 category 변경 시 컴포넌트가 재마운트되므로
  // useState 초기값이 항상 올바른 카테고리의 첫 번째 항목으로 설정됨
  const [activeProject, setActiveProject] = useState<string>(category.menuItems[0])
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
  const project = category.projects[activeProject]

  // 프로젝트 변경 시 이미지 인덱스 초기화
  const handleProjectChange = (item: string) => {
    setActiveProject(item)
    setActiveImageIndex(0)
  }

  // 이미지 네비게이션
  const handlePrevImage = () => {
    if (project.pictures && project.pictures.length > 0) {
      setActiveImageIndex((prev) => 
        prev === 0 ? project.pictures!.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (project.pictures && project.pictures.length > 0) {
      setActiveImageIndex((prev) => 
        prev === project.pictures!.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <div className="project-description">
      {/* 카테고리 타이틀 */}
      <div className="category-label">[ {category.categoryTitle} ]</div>
      
      {/* 메뉴 네비게이션 바 */}
      <nav className="desc-navbar">
        {category.menuItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${activeProject === item ? 'active' : ''}`}
            onClick={() => handleProjectChange(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="desc-inner">
        <div className="desc-header">
          <h2 className="desc-title">{project.title}</h2>
          <span className="desc-badge">{project.badge}</span>
        </div>
        
        <div className="desc-content">
          <div className="desc-section">
            <h3>► PROJECT_INFO</h3>
            <p>{project.info}</p>
          </div>

          {/* 사진 섹션 - pictures가 있을 때만 표시 */}
          {project.pictures && project.pictures.length > 0 && (
            <div className="desc-section">
              <h3>► SCREENSHOTS</h3>
              <div className="pictures-gallery">
                <button className="gallery-nav prev" onClick={handlePrevImage}>◄</button>
                <div className="gallery-container">
                  <img 
                    src={project.pictures[activeImageIndex]} 
                    alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                    className="gallery-image"
                  />
                  <div className="gallery-indicator">
                    {project.pictures.map((_, index) => (
                      <span 
                        key={index}
                        className={`indicator-dot ${index === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    ))}
                  </div>
                  <div className="gallery-counter">
                    [{activeImageIndex + 1}/{project.pictures.length}]
                  </div>
                </div>
                <button className="gallery-nav next" onClick={handleNextImage}>►</button>
              </div>
            </div>
          )}
          
          <div className="desc-section">
            <h3>► KEY_FEATURES</h3>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}><span className="bullet">▸</span> {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="desc-section">
            <h3>► ARCHITECTURE</h3>
            <div className="architecture-diagram">
              <div className="arch-box client-box">
                <span>{project.architecture.client.name}</span>
                <small>{project.architecture.client.tech}</small>
              </div>
              <div className="arch-arrow">⟷</div>
              <div className="arch-box server-box">
                <span>{project.architecture.server.name}</span>
                <small>{project.architecture.server.tech}</small>
              </div>
            </div>
          </div>
        </div>
        
        <div className="desc-footer">
          <span className={`status-indicator ${project.status.toLowerCase().replace('_', '-')}`}></span>
          <span>STATUS: {project.status}</span>
          <span className="year">{project.year}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription
