// 타입 export
export type { ProjectData, ProjectCategory } from './types'

// 카테고리별 프로젝트 export
export { gameProjects } from './game'
export { webProjects } from './web'
export { appProjects } from './app'
export { otherProjects } from './other'

// 카테고리별 데이터 매핑
import { gameProjects } from './game'
import { webProjects } from './web'
import { appProjects } from './app'
import { otherProjects } from './other'

export const projectCategories = {
  game: gameProjects,
  web: webProjects,
  app: appProjects,
  other: otherProjects
}
