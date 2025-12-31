import type { ProjectData } from '../types'

export const OtherProject3: ProjectData = {
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
