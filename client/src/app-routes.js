import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, VendorsPage, TagsPage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/vendors',
    component: VendorsPage
  }, 
  {
    path: '/tags',
    component: TagsPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
