import {
  RouterItem,
  PrivateRoutesPath,
} from '@ppm/common/main';
import { FeaturesAuthorization } from '@ppm/features/authorization';

const PublicRouter: RouterItem[] = [
  {
    path: `${PrivateRoutesPath.POST_LOGIN}`,
    title: null,
    icon: null,
    component: FeaturesAuthorization,
    onMenu: false,
  },

];

export default PublicRouter;
