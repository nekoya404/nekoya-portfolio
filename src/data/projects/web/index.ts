import type { ProjectCategory } from '../types'
import { WebProject1 } from './WebProject1'
import { WebProject2 } from './WebProject2'
import { WebProject3 } from './WebProject3'

// 웹 프로젝트들을 여기에 추가하세요
const projects = {
  WebProject1,
  WebProject2,
  WebProject3,
}

export const webProjects: ProjectCategory = {
  categoryTitle: 'WEB PROJECTS',
  menuItems: Object.keys(projects),
  projects
}
