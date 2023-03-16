// routes
import { PATH_DASHBOARD } from '@Routes/paths'
import { Icon } from '@iconify/react'

const ICONS = {
  analytics: <Icon icon="material-symbols:analytics" />,
  dashboard: <Icon icon="material-symbols:dashboard" />,
  booking: <Icon icon="mdi:calendar-badge" />
}

const navConfig = [
  {
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard
      },
      {
        title: 'analytics',
        path: PATH_DASHBOARD.general.analytics,
        icon: ICONS.analytics
      },
      {
        title: 'booking',
        path: PATH_DASHBOARD.general.booking,
        icon: ICONS.booking
      }
    ]
  }
]

export default navConfig
