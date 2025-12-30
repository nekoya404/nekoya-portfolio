import './TutorialCard.css'

interface TutorialCardProps {
  title?: string
  subtitle?: string
  link?: string
}

function TutorialCard({ 
  title = 'NEW SPLINE TUTORIAL', 
  subtitle = 'Learn how to make it in Spline',
  link = '#'
}: TutorialCardProps) {
  return (
    <div className="tutorial-card">
      <div className="tutorial-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <a href={link} className="watch-btn" target="_blank" rel="noopener noreferrer">
        WATCH NOW
      </a>
    </div>
  )
}

export default TutorialCard
