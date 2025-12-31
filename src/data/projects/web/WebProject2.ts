import type { ProjectData } from '../types'

export const WebProject2: ProjectData = {
  title: 'E-COMMERCE_PLATFORM',
  badge: 'Full Stack Development',
  info: 'Next.js 기반의 이커머스 플랫폼입니다. 서버 사이드 렌더링을 통한 SEO 최적화와 Stripe 결제 시스템을 통합했습니다.',
  features: [
    'Next.js 14 App Router',
    'Prisma ORM + PostgreSQL',
    'Stripe 결제 연동',
    'NextAuth.js 인증',
    'TailwindCSS 스타일링'
  ],
  architecture: {
    client: { name: 'FRONTEND', tech: 'Next.js' },
    server: { name: 'BACKEND', tech: 'Node.js + Prisma' }
  },
  status: 'IN_PROGRESS',
  year: '2024'
}
