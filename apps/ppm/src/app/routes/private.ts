import {
  RouterItem,
  PrivateRoutesPath,
  RouterMenuIcons,
} from '@ppm/common/main';
import { FeaturesDashboardMentor } from '@ppm/features/dashboard/mentor';
import { FeaturesMentors } from '@ppm/features/mentors';
import { FeaturesProfile } from '@ppm/features/profile';

const PrivateRouter: RouterItem[] = [
  {
    path: `/${PrivateRoutesPath.DASHBOARD}${PrivateRoutesPath.DASHBOARD_MENTOR}`,
    title: null,
    icon: null,
    component: FeaturesDashboardMentor,
    onMenu: false,
  },
  {
    path: `/${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`,
    title: 'Mentors',
    icon: RouterMenuIcons.MENTOR,
    component: FeaturesMentors,
    onMenu: true,
  },
  {
    path: `/${PrivateRoutesPath.USER_PROFILES}`,
    title: null,
    icon: null,
    component: FeaturesProfile,
    onMenu: true,
  },
];

export default PrivateRouter;
