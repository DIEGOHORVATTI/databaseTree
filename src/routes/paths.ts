const path = (root: string, sublink: string) => {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/dashboard'

export const PATH_AUTH = {
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  register: path(ROOTS_AUTH, '/register'),
  verify: path(ROOTS_AUTH, '/verify'),
  login: path(ROOTS_AUTH, '/login'),
  root: ROOTS_AUTH
}

export const PATH_PAGE = {
  maintenance: '/maintenance',
  comingSoon: '/coming-soon',
  components: '/components',
  contact: '/contact-us',
  payment: '/payment',
  pricing: '/pricing',
  about: '/about-us',
  page404: '/404',
  page500: '/500',
  faqs: '/faqs'
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
    app: path(ROOTS_DASHBOARD, '/app')
  }
}

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction'
