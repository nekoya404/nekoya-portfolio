import { useState } from 'react'
import './ProjectDescription.css'

export interface ProjectData {
  title: string
  badge: string
  info: string
  features: string[]
  architecture: {
    client: { name: string; tech: string }
    server: { name: string; tech: string }
  }
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PLANNING'
  year: string
}

export interface ProjectCategory {
  categoryTitle: string
  projects: Record<string, ProjectData>
  menuItems: string[]
}

interface ProjectDescriptionProps {
  category: ProjectCategory
}

function ProjectDescription({ category }: ProjectDescriptionProps) {
  // key prop으로 인해 category 변경 시 컴포넌트가 재마운트되므로
  // useState 초기값이 항상 올바른 카테고리의 첫 번째 항목으로 설정됨
  const [activeProject, setActiveProject] = useState<string>(category.menuItems[0])
  const project = category.projects[activeProject]

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
            onClick={() => setActiveProject(item)}
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
