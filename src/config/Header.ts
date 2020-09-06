interface HeaderMenu {
  name: string
  path: string
}

const HeaderMenus: HeaderMenu[] = [
  {
    name: 'Developers',
    path: '/profile'
  },
  {
    name: 'Register',
    path: '/register'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

export default {
  HeaderMenus
}
