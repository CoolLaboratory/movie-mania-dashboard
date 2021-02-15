import { installRouter } from '../helpers/router'
import { currentView } from '../stores/appStore'
import routes from './routes'


currentView.set(routes[0].component)


export const navigate = (to) => {
  window.history.pushState({}, '', to);
  handleNavigation(window.location);
}

const handleNavigation = (location) => {
  const record = routes.filter(r => r.path == location.pathname)[0]

  if(record) { currentView.set(record.component) }
  else { navigate('/not-found') }
}

installRouter(handleNavigation)