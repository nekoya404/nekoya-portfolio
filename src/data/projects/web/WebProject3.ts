import type { ProjectData } from '../types'

export const WebProject3: ProjectData = {
  title: 'DASHBOARD_APP',
  badge: 'Frontend Development',
  info: '실시간 데이터 시각화 대시보드입니다. D3.js와 Chart.js를 활용하여 복잡한 데이터를 직관적으로 표현합니다.',
  features: [
    'D3.js 데이터 시각화',
    'WebSocket 실시간 업데이트',
    'React Query 상태 관리',
    '드래그 앤 드롭 위젯',
    '다크/라이트 테마'
  ],
  architecture: {
    client: { name: 'FRONTEND', tech: 'React + D3.js' },
    server: { name: 'API', tech: 'Express + Socket.io' }
  },
  status: 'COMPLETED',
  year: '2024'
}
