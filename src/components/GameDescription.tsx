import './GameDescription.css'

function GameDescription() {
  return (
    <div className="game-description">
      <div className="desc-header">
        <h2 className="desc-title">GAME_PROJECT.EXE</h2>
        <span className="desc-badge">Full Stack Development</span>
      </div>
      
      <div className="desc-content">
        <div className="desc-section">
          <h3>► PROJECT_INFO</h3>
          <p>
            Unity 기반의 멀티플레이어 게임 프로젝트입니다. 
            클라이언트와 서버 모두 C#으로 개발되었으며, 
            MagicOnion을 활용한 실시간 통신을 구현했습니다.
          </p>
        </div>
        
        <div className="desc-section">
          <h3>► KEY_FEATURES</h3>
          <ul className="feature-list">
            <li><span className="bullet">▸</span> 실시간 멀티플레이어 시스템</li>
            <li><span className="bullet">▸</span> Protocol Buffers 기반 고속 직렬화</li>
            <li><span className="bullet">▸</span> UniTask 비동기 처리</li>
            <li><span className="bullet">▸</span> R3 반응형 프로그래밍</li>
            <li><span className="bullet">▸</span> MemoryPack 최적화</li>
          </ul>
        </div>
        
        <div className="desc-section">
          <h3>► ARCHITECTURE</h3>
          <div className="architecture-diagram">
            <div className="arch-box client-box">
              <span>CLIENT</span>
              <small>Unity + C#</small>
            </div>
            <div className="arch-arrow">⟷</div>
            <div className="arch-box server-box">
              <span>SERVER</span>
              <small>MagicOnion</small>
            </div>
          </div>
        </div>
      </div>
      
      <div className="desc-footer">
        <span className="status-indicator"></span>
        <span>STATUS: COMPLETED</span>
        <span className="year">2024</span>
      </div>
    </div>
  )
}

export default GameDescription
