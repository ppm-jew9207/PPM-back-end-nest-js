import { RouterItem, PrivateRoutesPath } from '@ppm/common/main';
import { FeaturesDashboardMentor } from '@ppm/features/dashboard/mentor';
import { FeaturesMentors } from '@ppm/features/mentors';

const PrivateRouter: RouterItem[] = [
  {
    path: `${PrivateRoutesPath.DASHBOARD}${PrivateRoutesPath.DASHBOARD_MENTOR}`,
    title: null,
    icon: null,
    component: FeaturesDashboardMentor,
    onMenu: false,
  },
  {
    path: `${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`,
    title: 'Mentors',
    icon: null,
    component: FeaturesMentors,
    onMenu: false,
  },
];

export default PrivateRouter;
