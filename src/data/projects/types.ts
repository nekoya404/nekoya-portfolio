// 프로젝트 데이터 타입 정의
export interface ProjectData {
  title: string
  badge: string
  info: string
  pictures?: string[]  // 선택적 필드 - 사진 URL 배열
  features: string[]
  architecture: {
    client: { name: string; tech: string }
    server: { name: string; tech: string }
  }
  status: string
  year: string
}

export interface ProjectCategory {
  categoryTitle: string
  menuItems: string[]
  projects: Record<string, ProjectData>
}
