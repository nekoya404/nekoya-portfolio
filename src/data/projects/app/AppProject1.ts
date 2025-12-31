import type { ProjectData } from '../types'

export const AppProject1: ProjectData = {
  title: 'FITNESS_TRACKER',
  badge: 'Mobile Development',
  info: 'React Native로 개발한 피트니스 트래킹 앱입니다. 운동 기록, 식단 관리, 건강 데이터 분석 기능을 제공합니다.',
  features: [
    'React Native + Expo',
    'HealthKit/Google Fit 연동',
    '오프라인 데이터 동기화',
    '푸시 알림 시스템',
    '소셜 챌린지 기능'
  ],
  architecture: {
    client: { name: 'MOBILE APP', tech: 'React Native' },
    server: { name: 'BACKEND', tech: 'Firebase' }
  },
  status: 'COMPLETED',
  year: '2024'
}
