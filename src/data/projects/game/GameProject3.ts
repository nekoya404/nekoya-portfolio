import type { ProjectData } from '../types'

export const GameProject3: ProjectData = {
  title: 'GAME_PROJECT_3',
  badge: 'Backend Development',
  info: '대규모 MMORPG 서버 인프라 프로젝트입니다. 분산 서버 아키텍처를 통해 수천 명의 동시 접속자를 처리합니다.',
  features: [
    '분산 서버 아키텍처',
    'Redis 기반 세션 관리',
    'MySQL 데이터베이스 샤딩',
    '실시간 매칭 시스템',
    'Docker 컨테이너화'
  ],
  architecture: {
    client: { name: 'GAME CLIENT', tech: 'Unreal Engine' },
    server: { name: 'SERVER CLUSTER', tech: 'Node.js + Redis' }
  },
  status: 'PLANNING',
  year: '2025'
}
