import type { ProjectData } from '../types'

export const AppProject2: ProjectData = {
  title: 'TASK_MANAGER',
  badge: 'Cross-Platform',
  info: 'Flutter로 개발한 태스크 관리 앱입니다. 칸반 보드 스타일의 UI와 팀 협업 기능을 제공합니다.',
  features: [
    'Flutter + Dart',
    'Bloc 상태 관리',
    '칸반 보드 UI',
    '실시간 팀 협업',
    '알림 및 리마인더'
  ],
  architecture: {
    client: { name: 'MOBILE APP', tech: 'Flutter' },
    server: { name: 'BACKEND', tech: 'Supabase' }
  },
  status: 'IN_PROGRESS',
  year: '2024'
}
