import {
  RouterItem,
  PrivateRoutesPath,
  RouterMenuIcons,
} from '@ppm/common/main';
import { FeaturesDashboardMentor } from '@ppm/features/dashboard/mentor';
import { FeaturesMentors } from '@ppm/features/mentors';
import { FeaturesProfile } from '@ppm/features/profile';
import { FeaturesCourseForm } from '@ppm/features/course-form';
import { FeaturesCoursePage } from '@ppm/features/course-page';
import { FeaturesLessonPage } from '@ppm/features/lesson-page';
import { FeaturesCourses } from '@ppm/features/courses';

const PrivateRouter: RouterItem[] = [
  {
    path: `/${PrivateRoutesPath.DASHBOARD}`,
    title: 'Dashboard',
    icon: 'dashboard',
    component: FeaturesDashboardMentor,
    onMenu: true,
  },
  {
    path: `/${PrivateRoutesPath.ADVERTS}`,
    title: 'Courses',
    icon: 'list',
    component: FeaturesCourses,
    onMenu: true,
  },
  {
    path: `/${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`,
    title: 'Mentors',
    icon: 'group',
    component: FeaturesMentors,
    onMenu: true,
  },
  {
    path: `/${PrivateRoutesPath.USER}`,
    title: 'User',
    icon: 'person',
    component: FeaturesProfile,
    onMenu: true,
  },
  {
    path: `/${PrivateRoutesPath.ADVERTS}/create`,
    title: 'Courses',
    icon: RouterMenuIcons.MENTOR,
    component: FeaturesCourseForm,
    onMenu: false,
  },
  {
    path: `/${PrivateRoutesPath.ADVERTS}${PrivateRoutesPath.GET_BY_ID}/edit`,
    title: 'Courses',
    icon: RouterMenuIcons.MENTOR,
    component: FeaturesCourseForm,
    onMenu: false,
  },
  {
    path: `/${PrivateRoutesPath.LESSONS}${PrivateRoutesPath.GET_BY_ID}`,
    title: 'Lesson',
    icon: null,
    component: FeaturesLessonPage,
    onMenu: false
  },
  {
    path: `/${PrivateRoutesPath.ADVERTS}${PrivateRoutesPath.GET_BY_ID}`,
    title: 'Courses',
    icon: null,
    component: FeaturesCoursePage,
    onMenu: false,
  },
];

export default PrivateRouter;
