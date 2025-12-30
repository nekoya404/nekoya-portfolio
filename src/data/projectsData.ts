import type { ProjectCategory } from '../components/ProjectDescription'

// 게임 프로젝트 데이터
export const gameProjects: ProjectCategory = {
  categoryTitle: 'GAME PROJECTS',
  menuItems: ['GameProject1', 'GameProject2', 'GameProject3'],
  projects: {
    GameProject1: {
      title: 'GAME_PROJECT_1',
      badge: 'Full Stack Development',
      info: 'Unity 기반의 멀티플레이어 게임 프로젝트입니다. 클라이언트와 서버 모두 C#으로 개발되었으며, MagicOnion을 활용한 실시간 통신을 구현했습니다.',
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
    },
    GameProject2: {
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
    },
    GameProject3: {
      title: 'GAME_PROJECT_3',
      badge: 'Backend Development',
      info: '대규모 MMORPG 서버 인프라 프로젝트입니다. 분산 서버 아키텍처를 통해 수천 명의 동시 접속자를 처리합니다.',
      features: [
        '분산 서버 아키텍처',
        'Redis 기반 세션 관리',
        'MySQL 데이터베이스 샤딩',
        '실시간 매칭 시스템',
        'Docker 컨테이너화'
      ],
      architecture: {
        client: { name: 'GAME CLIENT', tech: 'Unreal Engine' },
        server: { name: 'SERVER CLUSTER', tech: 'Node.js + Redis' }
      },
      status: 'PLANNING',
      year: '2025'
    }
  }
}

// 웹 프로젝트 데이터
export const webProjects: ProjectCategory = {
  categoryTitle: 'WEB PROJECTS',
  menuItems: ['WebProject1', 'WebProject2', 'WebProject3'],
  projects: {
    WebProject1: {
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
    },
    WebProject2: {
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
    },
    WebProject3: {
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
  }
}

// 앱 프로젝트 데이터
export const appProjects: ProjectCategory = {
  categoryTitle: 'APP PROJECTS',
  menuItems: ['AppProject1', 'AppProject2', 'AppProject3'],
  projects: {
    AppProject1: {
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
    },
    AppProject2: {
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
    },
    AppProject3: {
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
  }
}

// 기타 프로젝트 데이터
export const otherProjects: ProjectCategory = {
  categoryTitle: 'OTHER PROJECTS',
  menuItems: ['OtherProject1', 'OtherProject2', 'OtherProject3'],
  projects: {
    OtherProject1: {
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
    },
    OtherProject2: {
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
    },
    OtherProject3: {
      title: 'IOT_SYSTEM',
      badge: 'Embedded Systems',
      info: 'Raspberry Pi와 Arduino를 활용한 스마트홈 IoT 시스템입니다. 센서 데이터 수집과 자동화 제어를 구현합니다.',
      features: [
        'Raspberry Pi + Arduino',
        'MQTT 프로토콜',
        'InfluxDB 시계열 DB',
        'Grafana 대시보드',
        'Home Assistant 연동'
      ],
      architecture: {
        client: { name: 'IOT DEVICE', tech: 'Arduino + ESP32' },
        server: { name: 'HUB', tech: 'Raspberry Pi' }
      },
      status: 'PLANNING',
      year: '2025'
    }
  }
}

// 카테고리별 데이터 매핑
export const projectCategories = {
  game: gameProjects,
  web: webProjects,
  app: appProjects,
  other: otherProjects
}
