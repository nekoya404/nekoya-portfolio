import type { ProjectCategory } from '../types'
import { OtherProject1 } from './OtherProject1'
import { OtherProject2 } from './OtherProject2'
import { OtherProject3 } from './OtherProject3'

// 기타 프로젝트들을 여기에 추가하세요
const projects = {
  OtherProject1,
  OtherProject2,
  OtherProject3,
}

export const otherProjects: ProjectCategory = {
  categoryTitle: 'OTHER PROJECTS',
  menuItems: Object.keys(projects),
  projects
}
