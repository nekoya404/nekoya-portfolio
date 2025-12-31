import type { ProjectData } from '../types'

export const OtherProject1: ProjectData = {
  title: 'CLI_TOOL',
  badge: 'DevOps & Tools',
  info: 'Rust로 개발한 고성능 CLI 도구입니다. 파일 처리, 데이터 변환, 자동화 작업을 빠르게 수행합니다.',
  features: [
    'Rust 고성능 처리',
    '병렬 파일 처리',
    'JSON/YAML/TOML 파싱',
    '크로스 플랫폼 지원',
    '플러그인 시스템'
  ],
  architecture: {
    client: { name: 'CLI', tech: 'Rust + Clap' },
    server: { name: 'DISTRIBUTION', tech: 'Cargo + GitHub' }
  },
  status: 'COMPLETED',
  year: '2024'
}
