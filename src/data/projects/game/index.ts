import type { ProjectCategory } from '../types'
import { GameProject1 } from './GameProject1'
import { GameProject2 } from './GameProject2'
import { GameProject3 } from './GameProject3'

// 게임 프로젝트들을 여기에 추가하세요
const projects = {
  GameProject1,
  GameProject2,
  GameProject3,
}

export const gameProjects: ProjectCategory = {
  categoryTitle: 'GAME PROJECTS',
  menuItems: Object.keys(projects),
  projects
}
