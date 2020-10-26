import {
  RouterItem,
  PrivateRoutesPath,
  RouterMenuIcons,
} from '@ppm/common/main';
import { FeaturesDashboardMentor } from '@ppm/features/dashboard/mentor';
import { FeaturesMentors } from '@ppm/features/mentors';
import { FeaturesProfile } from '@ppm/features/profile';
import { FeaturesAdvertForm } from '@ppm/features/advert-form';
import { FeaturesAdvertPage } from '@ppm/features/advert-page';
import { FeaturesLessonPage } from '@ppm/features/lesson-page';

const PrivateRouter: RouterItem[] = [
  {
    path: `/${PrivateRoutesPath.DASHBOARD}`,
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
    path: `/${PrivateRoutesPath.USER}`,
    title: null,
    icon: null,
    component: FeaturesProfile,
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
  {
    path: `/${PrivateRoutesPath.LESSON}${PrivateRoutesPath.GET_BY_ID}`,
    title: 'Lesson',
    icon: RouterMenuIcons.MENTOR,
    component: FeaturesLessonPage,
    onMenu: false
  }
];

export default PrivateRouter;
