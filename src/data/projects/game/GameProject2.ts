import type { ProjectData } from '../types'

export const GameProject2: ProjectData = {
  title: 'GAME_PROJECT_2',
  badge: 'Frontend Development',
  info: '2D 퍼즐 어드벤처 게임입니다. Godot 엔진을 사용하여 개발되었으며, 절차적 생성 알고리즘을 통한 무한한 레벨을 제공합니다.',
  features: [
    '절차적 레벨 생성',
    'AI 기반 적 행동 패턴',
    '물리 기반 퍼즐 시스템',
    '세이브/로드 시스템',
    '업적 시스템'
  ],
  architecture: {
    client: { name: 'CLIENT', tech: 'Godot + GDScript' },
    server: { name: 'BACKEND', tech: 'Firebase' }
  },
  status: 'IN_PROGRESS',
  year: '2024'
}
