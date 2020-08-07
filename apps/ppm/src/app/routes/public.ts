import { RouterItem, PrivateRoutesPath } from '@ppm/common/main';
import { FeaturesAuthorization } from '@ppm/features/authorization';
import { FeaturesAdverts } from '@ppm/features/adverts';

const PublicRouter: RouterItem[] = [
  {
    path: `${PrivateRoutesPath.POST_LOGIN}`,
    title: null,
    icon: null,
    component: FeaturesAuthorization,
    onMenu: false,
  },
  {
    path: `/${PrivateRoutesPath.ADVERTS}`,
    title: null,
    icon: null,
    component: FeaturesAdverts,
    onMenu: false,
  },
];

export default PublicRouter;
