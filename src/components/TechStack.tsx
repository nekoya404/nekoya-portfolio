import './TechStack.css'

interface TechBadge {
  name: string
  badgeUrl: string
}

interface TechStackProps {
  clientStack: TechBadge[]
  serverStack: TechBadge[]
  dbStack?: TechBadge[]
}

const defaultGameStack: TechStackProps = {
  clientStack: [
    { name: 'Unity', badgeUrl: 'https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white' },
    { name: 'C#', badgeUrl: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white' },
    { name: 'R3', badgeUrl: 'https://img.shields.io/badge/R3-FF4154?style=for-the-badge&logo=reactivex&logoColor=white' },
    { name: 'MagicOnion', badgeUrl: 'https://img.shields.io/badge/MagicOnion-4DB6AC?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'Protocol Buffers', badgeUrl: 'https://img.shields.io/badge/Protocol%20Buffers-4285F4?style=for-the-badge&logo=google&logoColor=white' },
    { name: 'YetAnotherHttpHandler', badgeUrl: 'https://img.shields.io/badge/YetAnotherHttpHandler-512BD4?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'MemoryPack', badgeUrl: 'https://img.shields.io/badge/MemoryPack-26A69A?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'UniTask', badgeUrl: 'https://img.shields.io/badge/UniTask-7E57C2?style=for-the-badge&logo=unity&logoColor=white' },
  ],
  serverStack: [
    { name: 'C#', badgeUrl: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white' },
    { name: 'MagicOnion', badgeUrl: 'https://img.shields.io/badge/MagicOnion-4DB6AC?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: '.NET', badgeUrl: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'Redis', badgeUrl: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white' },
  ],
  dbStack: [
    { name: 'MySQL', badgeUrl: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'Redis', badgeUrl: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white' },
  ]
}

function TechStack({ clientStack = defaultGameStack.clientStack, serverStack = defaultGameStack.serverStack, dbStack = defaultGameStack.dbStack }: Partial<TechStackProps>) {
  return (
    <div className="tech-stack">
      <div className="stack-section">
        <h4 className="stack-label">• Client</h4>
        <div className="badge-container">
          {clientStack.map((tech) => (
            <img 
              key={tech.name}
              src={tech.badgeUrl}
              alt={tech.name}
              className="tech-badge"
            />
          ))}
        </div>
      </div>
      
      <div className="stack-section">
        <h4 className="stack-label">• Server</h4>
        <div className="badge-container">
          {serverStack.map((tech) => (
            <img 
              key={tech.name}
              src={tech.badgeUrl}
              alt={tech.name}
              className="tech-badge"
            />
          ))}
        </div>
      </div>

      {dbStack && dbStack.length > 0 && (
        <div className="stack-section">
          <h4 className="stack-label">• DB</h4>
          <div className="badge-container">
            {dbStack.map((tech) => (
              <img 
                key={tech.name}
                src={tech.badgeUrl}
                alt={tech.name}
                className="tech-badge"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TechStack
export { defaultGameStack }
export type { TechStackProps, TechBadge }
