import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PublicRoutes from '../PublicRoutes';
import Helmet from 'react-helmet';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map(({component: Component, path, title}) => (
          <Route
            path={path}
            key={path}
            element={
              <>
                <Component />
                <Helmet title={title} />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
