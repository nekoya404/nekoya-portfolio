import type { ProjectData } from '../types'

export const WebProject1: ProjectData = {
  title: 'PORTFOLIO_WEBSITE',
  badge: 'Full Stack Development',
  info: 'React와 TypeScript를 활용한 개인 포트폴리오 웹사이트입니다. Spline 3D 요소와 레트로 DOS 스타일 UI를 결합하여 독특한 사용자 경험을 제공합니다.',
  features: [
    'React 18 + TypeScript',
    'Spline 3D 인터랙션',
    'Vite 빌드 시스템',
    '반응형 레이아웃',
    'CSS 커스텀 애니메이션'
  ],
  architecture: {
    client: { name: 'FRONTEND', tech: 'React + Vite' },
    server: { name: 'HOSTING', tech: 'Vercel' }
  },
  status: 'COMPLETED',
  year: '2024'
}
