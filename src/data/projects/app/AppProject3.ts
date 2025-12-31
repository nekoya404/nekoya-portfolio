import type { ProjectData } from '../types'

export const AppProject3: ProjectData = {
  title: 'AR_SHOPPING',
  badge: 'Native Development',
  info: 'ARKit/ARCore를 활용한 증강현실 쇼핑 앱입니다. 가구나 제품을 실제 공간에 배치해볼 수 있습니다.',
  features: [
    'Swift + Kotlin 네이티브',
    'ARKit / ARCore',
    '3D 모델 렌더링',
    '제스처 인식',
    '실시간 측정 기능'
  ],
  architecture: {
    client: { name: 'NATIVE APP', tech: 'Swift / Kotlin' },
    server: { name: 'CLOUD', tech: 'AWS Lambda' }
  },
  status: 'PLANNING',
  year: '2025'
}
