import './PageContent.css'

export type PageType = 'profile' | 'portfolio' | '3d-chars' | 'mobile-app' | 'brand-id' | 'archive'

interface PageContentProps {
  pageType: PageType
}

const pageData: Record<PageType, { title: string; icon: string; description: string; details: string[] }> = {
  profile: {
    title: 'PROFILE.EXE',
    icon: '👤',
    description: 'Default home page',
    details: []
  },
  portfolio: {
    title: 'PORTFOLIO.WWW',
    icon: '🌐',
    description: 'My personal portfolio showcasing creative works',
    details: [
      '> Featured web projects with 3D elements',
      '> Interactive UI/UX designs',
      '> Responsive layouts & animations',
      '> Built with React + TypeScript + Spline'
    ]
  },
  '3d-chars': {
    title: '3D_CHARS.MDL',
    icon: '🎮',
    description: '3D Character Design Projects',
    details: [
      '> Game-ready character models',
      '> Stylized & realistic characters',
      '> Rigging & animation ready',
      '> Created with Blender & Spline'
    ]
  },
  'mobile-app': {
    title: 'MOBILE_APP.APK',
    icon: '📱',
    description: 'Mobile Application Design Works',
    details: [
      '> iOS & Android app designs',
      '> User-centered UX flows',
      '> Prototype & interaction design',
      '> Design system implementation'
    ]
  },
  'brand-id': {
    title: 'BRAND_ID.PSD',
    icon: '🎨',
    description: 'Brand Identity & Visual Design',
    details: [
      '> Logo design & brand guidelines',
      '> Color palette & typography',
      '> Marketing materials',
      '> Visual identity systems'
    ]
  },
  archive: {
    title: 'ARCHIVE.ZIP',
    icon: '📁',
    description: 'Project Archive (2019 - 2024)',
    details: [
      '> Legacy projects collection',
      '> Early design experiments',
      '> Freelance works',
      '> Personal side projects'
    ]
  }
}

function PageContent({ pageType }: PageContentProps) {
  const data = pageData[pageType]
  
  if (pageType === 'profile') {
    return null // Profile uses default layout
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <span className="page-icon">{data.icon}</span>
        <h1 className="page-title">{data.title}</h1>
      </div>
      
      <div className="page-body">
        <div className="page-description">
          <span className="prompt">C:\PROJECTS\&gt;</span> {data.description}
        </div>
        
        <div className="page-details">
          <div className="details-header">
            ╔══════════════════════════════════════════╗
          </div>
          <div className="details-content">
            {data.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <div className="details-footer">
            ╚══════════════════════════════════════════╝
          </div>
        </div>
        
        <div className="page-status">
          <span className="blink">█</span> Press any menu item to navigate...
        </div>
      </div>
    </div>
  )
}

export default PageContent
