import HomePage from '../views/HomePage.svelte'
import AboutPage from '../views/AboutPage.svelte'
import LoginPage from '../views/auth/LoginPage.svelte'
import RegisterPage from '../views/auth/RegisterPage.svelte'
import NotFoundPage from '../views/NotFoundPage.svelte'

export default [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/register', component: RegisterPage },
  { path: '/not-found', component: NotFoundPage },
]