import config from '~/config';

//Layouts
import HeaderOnly from '~/layouts/HeaderOnly';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
//public route
const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.live, element: Live },
    { path: config.routes.profile, element: Profile },
    { path: config.routes.upload, element: Upload, layout: HeaderOnly },
    { path: config.routes.search, element: Search, layout: NULL },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
