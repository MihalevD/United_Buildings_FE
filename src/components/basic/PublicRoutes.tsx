import routePaths from '../../config/routePaths';
import {AboutUs} from '../AboutUs';
import {Catalog} from '../pages/Catalog';
import {HomePage} from '../pages/HomePage';
import {PropertyPage} from '../pages/PropertyPage';

const PublicRoutes = [
  {
    path: routePaths.entry,
    component: () => <HomePage />,
    title: 'Home Page',
  },
  {
    path: routePaths.catalog,
    component: () => <Catalog onDelete={() => {}} />,
    title: 'Catalog',
  },
  {
    path: routePaths.aboutUs,
    component: () => <AboutUs />,
    title: 'About Us',
  },
  {
    path: routePaths.property,
    component: () => <PropertyPage />,
    title: 'Property',
  },
];

export default PublicRoutes;
