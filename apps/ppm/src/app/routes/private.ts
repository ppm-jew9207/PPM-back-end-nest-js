import {
  RouterItem,
  PrivateRoutesPath,
  RouterMenuIcons,
} from '@ppm/common/main';
import { FeaturesDashboardMentor } from '@ppm/features/dashboard/mentor';
import { FeaturesMentors } from '@ppm/features/mentors';
import { FeaturesAdvertForm } from '@ppm/features/advert-form';

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
    path: `/${PrivateRoutesPath.ADVERTS}/create`,
    title: 'Adverts',
    icon: RouterMenuIcons.MENTOR,
    component: FeaturesAdvertForm,
    onMenu: false,
  },
  {
    path: `/${PrivateRoutesPath.ADVERTS}${PrivateRoutesPath.GET_BY_ID}/edit`,
    title: 'Adverts',
    icon: RouterMenuIcons.MENTOR,
    component: FeaturesAdvertForm,
    onMenu: false,
  },
];

export default PrivateRouter;
