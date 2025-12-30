import './ProjectsList.css'
import type { PageType } from '../App'

interface Project {
  title: string
  subtitle: string
  pageType: PageType
  color?: string
}

interface ProjectsListProps {
  currentPage: PageType
  onPageChange: (page: PageType) => void
}

const projects: Project[] = [
  {
    title: 'PROFILE',
    subtitle: 'Experience & Skills',
    pageType: 'profile',
    color: '#22c55e'
  },
  {
    title: 'GAME_PROJECT',
    subtitle: 'Full Stack',
    pageType: 'game',
    color: '#8b5cf6'
  },
  {
    title: 'WEB_PROJECT',
    subtitle: 'Full Stack(Serverless)',
    pageType: 'web',
    color: '#ec4899'
  },
  {
    title: 'APP_PROJECT',
    subtitle: 'Full Stack(Serverless)',
    pageType: 'app',
    color: '#f97316'
  },
  {
    title: 'OTHER_PROJECT',
    subtitle: 'Etc.',
    pageType: 'other',
    color: '#06b6d4'
  }
]

function ProjectsList({ currentPage, onPageChange }: ProjectsListProps) {
  const handleClick = (e: React.MouseEvent, pageType: PageType) => {
    e.preventDefault()
    onPageChange(pageType)
  }

  return (
    <div className="projects-list">
      <h3 className="section-title">LATEST_PROJECTS</h3>
      <div className="projects">
        {projects.map((project) => (
          <a 
            key={project.title}
            href="#"
            className={`project-item ${currentPage === project.pageType ? 'active' : ''}`}
            onClick={(e) => handleClick(e, project.pageType)}
          >
            <div 
              className="project-icon" 
              style={{ background: 'transparent' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
              </svg>
            </div>
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.subtitle}</p>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
