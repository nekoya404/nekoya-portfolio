import type { ProjectCategory } from '../types'
import { AppProject1 } from './AppProject1'
import { AppProject2 } from './AppProject2'
import { AppProject3 } from './AppProject3'

// 앱 프로젝트들을 여기에 추가하세요
const projects = {
  AppProject1,
  AppProject2,
  AppProject3,
}

export const appProjects: ProjectCategory = {
  categoryTitle: 'APP PROJECTS',
  menuItems: Object.keys(projects),
  projects
}
