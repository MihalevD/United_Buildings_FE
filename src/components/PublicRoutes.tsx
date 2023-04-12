import routePaths from '../config/routePaths';
import {HomePage} from './HomePage';

const PublicRoutes = [
  {
    path: routePaths.entry,
    component: () => <HomePage />,
    title: 'Home Page',
  },
];

export default PublicRoutes;
