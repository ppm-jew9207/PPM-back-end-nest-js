import { RouterItem, PrivateRoutesPath } from '@ppm/common/main';
import { FeaturesAuthorization } from '@ppm/features/authorization';
import { FeaturesRegistration } from '@ppm/features/registration';
import { FeaturesForgotPassword } from '@ppm/features/forgot-password';
import { FeaturesProfile } from '@ppm/features/profile';

const PublicRouter: RouterItem[] = [
  {
    path: `${PrivateRoutesPath.POST_LOGIN}`,
    title: null,
    icon: null,
    component: FeaturesAuthorization,
    onMenu: false,
  },
  {
    path: `${PrivateRoutesPath.POST_REGISTRY}/:code`,
    title: null,
    icon: null,
    component: FeaturesRegistration,
    onMenu: false,
  },
  {
    path: `${PrivateRoutesPath.POST_REGISTRY}`,
    title: null,
    icon: null,
    component: FeaturesRegistration,
    onMenu: false,
  },
  {
    path: PrivateRoutesPath.POST_FORGOT_PASSWORD_FE,
    title: '',
    icon: '',
    component: FeaturesForgotPassword,
    onMenu: false
  },
  {
    path: PrivateRoutesPath.POST_ADD_ADVERT,
    title: '',
    icon: '',
    component: FeaturesProfile,
    onMenu: false
  },
];

export default PublicRouter;
