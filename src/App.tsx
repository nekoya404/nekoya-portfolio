import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import SplineViewer from './components/SplineViewer'
import TutorialCard from './components/TutorialCard'
import SocialLinks from './components/SocialLinks'
import ProjectsList from './components/ProjectsList'
import GameDescription from './components/GameDescription'
import TechStack from './components/TechStack'
import './App.css'

export type PageType = 'profile' | 'game' | 'web' | 'app' | 'other'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('profile')

  return (
    <div className="portfolio-container">
      <main className="grid-layout">
        {/* Left & Center Column - Changes based on page */}
        {currentPage === 'profile' ? (
          <>
            {/* Default Profile Layout */}
            <section className="left-column">
              <ProfileCard />
            </section>
            
            <section className="center-column">
              <div className="spline-wrapper">
                <SplineViewer />
              </div>
              <TutorialCard 
                title="New Spline tutorial"
                subtitle="Learn how to make it in Spline"
                link="https://www.youtube.com/@Aximoris"
              />
            </section>
          </>
        ) : (
          <>
            {/* Project Page Layout - Full width description */}
            <section className="content-column">
              {currentPage === 'game' && <GameDescription />}
              {currentPage === 'web' && <GameDescription />}
              {currentPage === 'app' && <GameDescription />}
              {currentPage === 'other' && <GameDescription />}
            </section>
          </>
        )}
        
        {/* Right Column - Social/TechStack & Projects */}
        <section className="right-column">
          {currentPage === 'profile' ? (
            <SocialLinks />
          ) : (
            <TechStack />
          )}
          <ProjectsList currentPage={currentPage} onPageChange={setCurrentPage} />
        </section>
      </main>
    </div>
  )
}

export default App
