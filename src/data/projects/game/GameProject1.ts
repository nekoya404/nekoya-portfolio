import type { ProjectData } from '../types'

export const GameProject1: ProjectData = {
  title: 'GAME_PROJECT_1',
  badge: 'Full Stack Development',
  info: 'Unity 기반의 멀티플레이어 게임 프로젝트입니다. 클라이언트와 서버 모두 C#으로 개발되었으며, MagicOnion을 활용한 실시간 통신을 구현했습니다.',
  pictures: [
    'https://picsum.photos/seed/game1-1/600/400',
    'https://picsum.photos/seed/game1-2/600/400',
    'https://picsum.photos/seed/game1-3/600/400'
  ],
  features: [
    '실시간 멀티플레이어 시스템',
    'Protocol Buffers 기반 고속 직렬화',
    'UniTask 비동기 처리',
    'R3 반응형 프로그래밍',
    'MemoryPack 최적화'
  ],
  architecture: {
    client: { name: 'CLIENT', tech: 'Unity + C#' },
    server: { name: 'SERVER', tech: 'MagicOnion' }
  },
  status: 'COMPLETED',
  year: '2024'
}
