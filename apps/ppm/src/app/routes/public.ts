import {
  RouterItem,
  PrivateRoutesPath,
} from '@ppm/common/main';
import { FeaturesAuthorization } from '@ppm/features/authorization';
import { FeaturesRegistration } from '@ppm/features/registration';

const PublicRouter: RouterItem[] = [
  {
    path: `${PrivateRoutesPath.POST_LOGIN}`,
    title: null,
    icon: null,
    component: FeaturesAuthorization,
    onMenu: false,
  },
  {
    path: `${PrivateRoutesPath.POST_REGISTRY}`,
    title: null,
    icon: null,
    component: FeaturesRegistration,
    onMenu: false,
  }

];

export default PublicRouter;
