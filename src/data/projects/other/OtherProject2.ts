import type { ProjectData } from '../types'

export const OtherProject2: ProjectData = {
  title: 'ML_PIPELINE',
  badge: 'Machine Learning',
  info: 'Python 기반의 머신러닝 파이프라인입니다. 데이터 전처리부터 모델 배포까지 자동화된 워크플로우를 제공합니다.',
  features: [
    'Python + TensorFlow',
    'MLflow 실험 관리',
    'Kubeflow 파이프라인',
    '자동 하이퍼파라미터 튜닝',
    'A/B 테스트 프레임워크'
  ],
  architecture: {
    client: { name: 'JUPYTER', tech: 'Python + Pandas' },
    server: { name: 'ML PLATFORM', tech: 'Kubernetes' }
  },
  status: 'IN_PROGRESS',
  year: '2024'
}
